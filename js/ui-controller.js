/**
 * UIController - Manages the practice generator UI and user interactions
 */
class UIController {
  constructor() {
    this.generator = null;
    this.currentDifficulty = 1;
    this.timerDuration = 30;
    this.countdown = null;
    this.sentenceBuilders = {};
    this.currentBuilder = null;
  }

  /**
   * Initialize the UI controller for a specific sentence builder
   * @param {string} builderFile - Sentence builder file name (without path/extension)
   */
  async init(builderFile) {
    console.log('Initializing practice generator with:', builderFile);

    try {
      // Load the sentence builder
      await this.loadSentenceBuilder(builderFile);

      // Set up the generator
      this.currentBuilder = builderFile;
      this.generator = new SentenceGenerator(this.sentenceBuilders[this.currentBuilder]);

      console.log('Generator initialized successfully');

      // Bind event listeners
      this.bindEvents();
    } catch (error) {
      console.error('Error initializing UI:', error);
      this.showError(`Failed to load sentence builder: ${error.message}`);
    }
  }

  /**
   * Load a single sentence builder JSON file
   * @param {string} fileName - File name without path/extension
   */
  async loadSentenceBuilder(fileName) {
    const url = `../data/sentence-builders/${fileName}.json`;
    console.log('Fetching sentence builder from:', url);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Loaded sentence builder:', data.title);

    this.sentenceBuilders[fileName] = data;
    return data;
  }

  /**
   * Bind event listeners to UI elements
   */
  bindEvents() {
    // Generate button
    const generateBtn = document.getElementById('generateBtn');
    if (generateBtn) {
      generateBtn.addEventListener('click', () => this.generateAndDisplay());
    }

    // Next button
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.generateAndDisplay());
    }

    // Difficulty buttons
    const difficultyBtns = document.querySelectorAll('.difficulty-btn');
    difficultyBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Remove active class from all buttons
        difficultyBtns.forEach(b => b.classList.remove('active'));

        // Add active class to clicked button
        e.target.classList.add('active');

        // Update current difficulty
        this.currentDifficulty = parseInt(e.target.dataset.level);
      });
    });

    // Timer duration selector
    const timerSelect = document.getElementById('timerDuration');
    if (timerSelect) {
      timerSelect.addEventListener('change', (e) => {
        this.timerDuration = parseInt(e.target.value);
      });
    }
  }

  /**
   * Generate and display a new sentence
   */
  generateAndDisplay() {
    // Clear any existing countdown
    if (this.countdown) {
      clearInterval(this.countdown);
    }

    // Generate new sentence
    const sentence = this.generator.generateSentence(this.currentDifficulty);

    // Show display area
    const displayArea = document.getElementById('sentenceDisplay');
    displayArea.classList.remove('hidden');

    // Display English sentence
    const englishElement = document.getElementById('englishSentence');
    englishElement.textContent = sentence.english;

    // Hide French answer initially
    const frenchAnswer = document.getElementById('frenchAnswer');
    frenchAnswer.classList.add('hidden');

    // Hide next button
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.classList.add('hidden');

    // Start countdown
    this.startCountdown(this.timerDuration, sentence.french);
  }

  /**
   * Start the countdown timer
   * @param {number} duration - Duration in seconds
   * @param {string} frenchSentence - French answer to reveal when done
   */
  startCountdown(duration, frenchSentence) {
    const countdownElement = document.getElementById('countdown');
    const progressBar = document.getElementById('progressBar');
    let timeLeft = duration;

    // Display initial time
    countdownElement.textContent = timeLeft;

    // Reset progress bar
    progressBar.style.width = '100%';
    progressBar.classList.remove('warning', 'danger');
    countdownElement.style.color = '#7dffd0';

    // Clear any existing interval
    if (this.countdown) {
      clearInterval(this.countdown);
    }

    // Start countdown
    this.countdown = setInterval(() => {
      timeLeft--;
      countdownElement.textContent = timeLeft;

      // Update progress bar width
      const percentRemaining = (timeLeft / duration) * 100;
      progressBar.style.width = percentRemaining + '%';

      // Change color when time is running out
      if (timeLeft <= 5) {
        countdownElement.style.color = '#ff4444';
        progressBar.classList.remove('warning');
        progressBar.classList.add('danger');
      } else if (timeLeft <= 10) {
        countdownElement.style.color = '#ff9800';
        progressBar.classList.remove('danger');
        progressBar.classList.add('warning');
      }

      // When countdown reaches zero
      if (timeLeft <= 0) {
        clearInterval(this.countdown);
        this.revealAnswer(frenchSentence);
      }
    }, 1000);
  }

  /**
   * Reveal the French answer
   * @param {string} frenchSentence - French sentence to display
   */
  revealAnswer(frenchSentence) {
    // Hide countdown
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = '⏰ Time\'s up!';
    countdownElement.style.color = '#dc3545';

    // Show French answer
    const frenchAnswer = document.getElementById('frenchAnswer');
    frenchAnswer.innerHTML = `<strong>Answer:</strong> ${frenchSentence}`;
    frenchAnswer.classList.remove('hidden');

    // Show next button
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.classList.remove('hidden');
  }

  /**
   * Show an error message
   * @param {string} message - Error message
   */
  showError(message) {
    const displayArea = document.getElementById('sentenceDisplay');
    if (displayArea) {
      displayArea.innerHTML = `<div style="color: #ff4444; padding: 20px; text-align: center;">❌ ${message}</div>`;
      displayArea.classList.remove('hidden');
    } else {
      alert(message);
    }
  }
}
