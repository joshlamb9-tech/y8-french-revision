# Year 7 & 8 Student Tracking System - Comprehensive Recommendation

**Prepared for:** Josh Lamb, Head of Year 7&8, Mowden Hall School
**Date:** 15 February 2026
**Purpose:** Design a comprehensive pastoral tracking document that MARVIN can maintain

---

## Executive Summary

**Recommended Platform:** Google Sheets
**Structure:** Master tracking sheet with individual student tabs
**Update Frequency:** Weekly minimum, incident-based as needed
**Integration:** Links to existing teaching database (marvin.db)

This recommendation is based on research into UK independent school pastoral care best practices, intervention tracking methodologies, and the 2026 legislative changes to safeguarding requirements.

---

## 1. Platform Recommendation: Google Sheets vs Google Docs

### **Winner: Google Sheets**

#### Why Google Sheets is Superior

**Data Organization & Searchability**
- Structured data in rows/columns allows filtering by student, date, concern type, or intervention status
- Sort chronologically or categorically instantly
- Filter view capabilities let you see specific cohorts (e.g., "all students with ongoing wellbeing concerns")
- Google Docs cannot provide this level of data manipulation

**AI Integration & MARVIN Updates**
- MARVIN can update structured data more reliably via Google Workspace API
- Formula-based automation (e.g., automatic flagging when last parent contact was >4 weeks ago)
- Data validation ensures consistency (dropdown menus for intervention types, concern categories)
- In pilot studies across 300+ US schools, 82% of educators rated Sheets as "very effective" for student engagement

**Practical Daily Use**
- Quick reference during parent meetings (filter to see all communication with specific families)
- Cloud-based access anywhere (meetings, home, on duty)
- Multiple team members can access simultaneously (you, form tutors, pastoral team)
- Export capabilities for reporting to SLT

**Educational Effectiveness**
- 66% of middle and high schools use Sheets for gradebooks
- Google Sheets allows you to create spreadsheets, track grades, attendance, and other information, and share data with colleagues
- More powerful than Docs for working with numerical data and advanced data manipulation

#### Why NOT Google Docs

- Text-based format makes searching for patterns difficult
- No filtering or sorting capabilities
- Cannot generate summary statistics (e.g., "how many interventions this term?")
- Less structured = harder for MARVIN to update consistently
- No formula support for automatic flagging/reminders

**Sources:** [The Bricks - Google Sheets vs Docs](https://www.thebricks.com/resources/google-sheets-vs-google-docs-which-tool-is-best), [Control Alt Achieve - Google Sheets for Educators](https://www.controlaltachieve.com/2023/03/google-sheets-for-educators.html), [Using Google Sheets to Track Student Data](https://www.middleweb.com/46536/how-i-use-google-sheets-to-track-student-data/)

---

## 2. What to Include: Essential Fields

Based on research into UK pastoral care systems and 2026 safeguarding requirements, the tracking document should include:

### Core Information (from existing database)
- Student name, preferred name
- Form group (7S, 7M, 8L, 8S)
- Date of birth
- Medical/SEN flags (Type 1 Diabetes, Coeliac, ADHD, dyslexia, etc.)
- Current tutor

### Academic Tracking
- **Effort grades** - termly snapshots from reports
- **Subject concerns** - specific subjects flagging issues
- **Prep quality** - patterns of missing or poor quality prep
- **Common Entrance prep** (Y8 only) - tracking readiness
- **Scholarship candidates** - noting academic strengths

**Why this matters:** Early intervention on academic dips often reveals pastoral issues. A sudden drop in Maths effort from a previously strong student signals something deeper.

### Pastoral Tracking (The Core)
- **Wellbeing concerns** - anxiety, confidence, self-esteem, body image
- **Behavioral issues** - specific incidents logged with dates
- **Friendship dynamics** - falling-outs, isolation, group changes
- **Social integration** - students on the periphery who need proactive support
- **Emotional regulation** - students struggling with resilience
- **Home situations** - parental separation, bereavement, family stress (handled sensitively)

**Best practice:** Schools now use training for students as "peer supporters" who provide additional pastoral capacity. Your tracking should note which students are receiving peer support and which might benefit from being trained as supporters.

**Sources:** [Sec-Ed - Effective Pastoral Care](https://www.sec-ed.co.uk/content/best-practice/ideas-for-effective-pastoral-care-in-schools), [Pastoral Care in Schools - Hatching Dragons](https://www.hatching-dragons.com/blog/pastoral-care-schools)

### Parent Communication Log
Essential fields based on educational best practice:

- **Date** of communication
- **Type** (phone call, email, in-person meeting, Zoom)
- **Initiated by** (parent, school, student concern)
- **Topic/reason** for contact
- **Outcome/action points**
- **Follow-up required** (Y/N and date)

**Why critical:** For students with specific behavior concerns, this allows you to see how often parents have been notified and track how the student has progressed based on conversations with parents. Documentation is also crucial for safeguarding compliance under 2026 legislation.

**Best practice format:** Some educators use spiral notebooks with each student's name at the top, recording important incidents, phone calls, notes, conferences. A digital Google Sheet provides this plus searchability and backup.

**Sources:** [Parent Communication Log Templates](https://templatelab.com/parent-contact-logs/), [Appletastic Learning - Parent Communication Log](https://appletasticlearning.com/product/parent-communication-log-and-student-behavior-log-and-forms/)

### Interventions & Actions Taken
Based on Multi-Tiered System of Support (MTSS) best practices:

- **Intervention type** (academic support, counseling referral, buddy system, mentoring)
- **Start date** and **review date**
- **SMART goal** - Specific, Measurable, Attainable, Relevant, Timely
- **Progress monitoring plan** - how you're measuring success
- **Outcome** - Continue/Change/Fade/Exit (standard decision framework)
- **Staff involved** (form tutor, HoD, SLT, external services)

**Why structured interventions matter:** Progress monitoring is the ongoing, frequent collection of formal data to (1) assess students' performance, (2) quantify rate of improvement, and (3) evaluate effectiveness of intervention. Strong progress monitoring depends on strong goals.

**Decision-making criteria:**
- **Continue** - progress evident but goal not met (set new review date)
- **Change** - goal not met, no progress evident (try different approach)
- **Fade** - goal met but monthly monitoring continues
- **Exit** - goal met and problem resolved, or progress not possible

**Best practice:** At least 6 data points of measurement before making intervention decisions.

**Sources:** [NCII - Progress Monitoring](https://intensiveintervention.org/data-based-individualization/progress-monitoring), [Panorama - Progress Monitoring Fundamentals](https://www.panoramaed.com/blog/progress-monitoring-fundamentals-mtss-rti), [Frontline Education - Monitor Progress](https://www.frontlineeducation.com/blog/monitor-progress-tier-1-classroom-interventions/)

### Achievements & Positive Notes
- **Academic achievements** (excellent test results, improvement)
- **Character development** (leadership, kindness, resilience moments)
- **Extracurricular success** (sports, drama, music, house competitions)
- **Positive parent feedback**
- **Staff commendations**

**Why balance matters:** Outstanding pastoral care recognizes that students are individuals with unique needs and strengths. Tracking positives provides ammunition for references, scholarship applications, and parent meetings. It also helps you spot patterns (e.g., student struggling academically but thriving in drama = confidence-building opportunity).

**Sources:** [Lord Wandsworth - Outstanding Pastoral Care](https://www.lordwandsworth.org/news/insights/outstanding-pastoral-care-uk-schools/), [Luckley House - Role of Pastoral Care](https://www.luckleyhouseschool.org/the-role-of-pastoral-care-in-independent-schools/)

### Medical & SEN Information
- **Diagnosed conditions** (pulled from school records)
- **Medication requirements**
- **Individual Health Care Plans** (IHCPs) - link to documents
- **SEN support** - specific accommodations
- **Review dates** for support plans

**2026 Safeguarding Context:** The Children's Wellbeing and Schools Bill formally embeds education within local safeguarding arrangements. Schools will face increased demand for attendance, progress, and pastoral information for vulnerable pupils. Your tracking system needs to demonstrate robust monitoring.

**Sources:** [TES - Safeguarding Changes 2026](https://www.tes.com/magazine/analysis/general/safeguarding-policy-changes-for-schools)

### Boarding Information (if applicable)
- **Boarding status** (weekly/occasional/day)
- **Boarding issues** (homesickness, sleep, routine)
- **Weekend activities** participation

---

## 3. Proposed Structure & Layout

### **Option A: Master Tracking Sheet + Individual Student Tabs** (RECOMMENDED)

**Master Sheet Structure:**
```
Columns:
- Student Name | Form | Tutor | Last Updated | Red Flags |
- Last Parent Contact | Last Intervention | Current Concerns |
- Action Required | Quick Link to Student Tab
```

**Individual Student Tabs:**
Each student gets their own tab with sections:

1. **Student Overview**
   - Basic info (DOB, form, medical, SEN)
   - Current academic snapshot (effort grades by subject)
   - Parent contact details

2. **Pastoral Timeline** (chronological log)
   ```
   Date | Category | Incident/Note | Action Taken | Staff | Follow-up
   ```

3. **Parent Communication Log**
   ```
   Date | Type | Initiated By | Topic | Outcome | Follow-up Required
   ```

4. **Interventions**
   ```
   Start Date | Type | SMART Goal | Review Date |
   Progress Notes | Outcome | Exit Date
   ```

5. **Achievements & Positives**
   ```
   Date | Achievement | Context | Celebrated How
   ```

**Advantages:**
- Quick overview via master sheet during meetings
- Deep dive into individual students via their tab
- Chronological record preserved per student
- Easy for MARVIN to update (append to specific student's timeline)
- Year-on-year handover (archive previous year's tracking)

### **Option B: Single Master List** (NOT RECOMMENDED)

All students in one sheet with all data in rows. Problem: becomes unwieldy with 50+ students and multiple entries per student. Hard to read chronological progression for individual students.

### **Option C: One Document Per Year Group**

Separate sheets for Y7 and Y8. Could work but adds complexity when students move up. Recommended: Single document, clearly labeled by form (7S, 7M, 8L, 8S).

---

## 4. Organization: Chronological vs Categorical

### **Recommended Approach: Hybrid**

**Chronological within individual student tabs** - all pastoral incidents logged by date so you can see progression over time. Essential for spotting patterns (e.g., behavior deteriorates every October, suggests seasonal affective disorder or anniversary of family event).

**Categorical in master sheet** - filter view options by:
- Concern type (academic, wellbeing, behavioral, friendship)
- Intervention status (active, under review, closed)
- Form group
- Red flags (safeguarding, high priority)

**Why hybrid?** Research shows that while tracking was originally intended for practical pedagogical purposes, the most effective pastoral systems combine chronological record-keeping (what happened when) with categorical analysis (what patterns exist across cohorts).

**Best practice:** Record everything chronologically but use categorical tags/labels so you can analyze by theme. Example: "15 Oct 2025 | Friendship [Category] | Falling out with George | Mediated discussion | JL | Follow-up 22 Oct"

**Sources:** [Educate-Me - Tracking Student Data](https://www.educate-me.co/blog/tracking-student-data)

---

## 5. Value Proposition: Why This Matters for Your Role

### For Day-to-Day Head of Year Work

**Before parent meetings:**
- Filter to student's name → instant access to all communication history, concerns, interventions
- Demonstrate you know their child deeply ("I remember you mentioned in October that...")
- Show proactive monitoring ("We've been tracking this and here's what we've tried...")

**For student concerns:**
- Quickly identify if pattern is new or longstanding
- See what interventions have already been tried (avoid repeating failed approaches)
- Identify which staff have been involved (ensure continuity)

**For reporting to SLT:**
- Generate statistics: "15 students received wellbeing interventions this term"
- Demonstrate intervention effectiveness: "80% of behavior interventions resulted in improvement"
- Safeguarding compliance: documented monitoring of vulnerable pupils

### For Career Progression & Whole-School Leadership

As Head of Year, you're on the **pastoral leadership pathway**:
Form Tutor → Head of Year → Key Stage Lead → Assistant Head (Pastoral) → Deputy Head → Headteacher

**This tracking system demonstrates:**

1. **Strategic thinking** - You're building systems, not just responding reactively
2. **Data-driven decision making** - Using evidence to inform interventions
3. **Proactive pastoral care** - Identifying concerns before crisis point
4. **Professional documentation** - Ready for Ofsted, ISI inspections, safeguarding reviews
5. **Leadership capacity** - Managing complex information across 50+ students
6. **Innovation** - Using AI/MARVIN to enhance pastoral care effectiveness

**For NPQML/NPQSL applications:**
This tracking system becomes evidence of your middle leadership impact. You can cite:
- Number of students supported
- Intervention success rates
- Early identification of concerns preventing escalation
- Parent satisfaction (demonstrated through communication logs)

**For references & headship applications:**
Headteachers need to demonstrate excellence in pastoral care. This system shows:
- Systematic approach to student wellbeing
- Whole-school perspective (tracking across two year groups)
- Integration of academic and pastoral data
- Compliance with statutory safeguarding requirements

**Context:** Middle leaders have a pivotal role implementing school development strategy. Success at Head of Year level demonstrates capacity for broader leadership responsibilities like Key Stage Lead or Assistant Head positions.

**Sources:** [How to Become a Head of Year - TES](https://www.tes.com/jobs/careers-advice/leadership/how-become-head-year), [Leadership Jobs in Education - Quarterdeck](https://quarterdeck.co.uk/articles/leadership-jobs-in-education)

### For Student Wellbeing & Progression

**Early intervention:** Pastoral care tracking allows automatic identification of concerning trends and daily reports on behavioral patterns, bringing key concerns to light immediately.

**Continuity of care:** When students move between form tutors or you hand over to next year's Head of Year, they get comprehensive context.

**Holistic support:** Linking academic tracking (from your teaching database) with pastoral tracking shows whole picture. Example: Student's Maths effort drops from A to C → check pastoral log → parents divorcing → intervention = pastoral support + academic mentoring.

**Evidence-based interventions:** Instead of "let's try this and see," you can review what's worked before and apply evidence-based approaches.

**Safeguarding compliance:** 2026 legislation increases demand for documented pastoral monitoring. This system ensures you can demonstrate robust tracking of vulnerable pupils.

**Sources:** [Schoolbox - Student Wellbeing and Pastoral Care](https://schoolbox.education/student-wellbeing-and-pastoral-care/), [iSAMS Wellbeing Manager](https://www.isams.com/platform/modules/wellbeing-manager/)

---

## 6. Integration with Existing Teaching Database

Your current `marvin.db` SQLite database contains:
- 69 students
- 7 classes
- Student medical/SEN information
- Tutor report data
- Class membership

### Recommended Integration Strategy

**1. One-time data migration (MARVIN can handle this):**
- Pull all Y7 and Y8 students from database
- Create Google Sheet with master tab + individual student tabs
- Pre-populate basic info (name, form, medical flags, SEN)

**2. Two-way sync for certain fields:**
- **From database → Sheet:** Academic data, class membership, medical updates
- **From Sheet → Database:** Major pastoral flags for lesson planning context

**3. Keep pastoral detail in Sheets:**
- Detailed pastoral notes, parent communications, interventions = too sensitive for teaching database
- Teaching database = academic planning tool
- Pastoral tracking sheet = confidential pastoral care record

**4. Link strategy:**
Embed Google Sheet link in database notes field for quick access:
```sql
UPDATE students
SET academic_notes = 'Pastoral tracking: [Sheet Link]'
WHERE year_group IN ('7', '8')
```

### What Can Be Automated vs Manual Entry

**Automated (MARVIN can update):**
- Student roster updates when students join/leave
- Academic snapshots from termly reports
- Effort grade changes
- Medical/SEN updates from school systems
- Scheduled reminders ("Last parent contact >4 weeks ago - consider check-in")

**Manual entry (you or form tutors):**
- Pastoral incidents (requires human judgment on what's significant)
- Parent communication logs (unless you want MARVIN to log emails automatically)
- Intervention progress notes (requires professional assessment)
- Achievements (though MARVIN could log from emails praising students)

**Semi-automated:**
- MARVIN could draft pastoral log entries from incident reports you dictate
- MARVIN could parse parent emails and suggest communication log entries for your approval
- MARVIN could prompt you: "It's been 2 weeks since Archie's behavior intervention started - time for progress review?"

### Update Frequency

**Weekly minimum:**
- Review master sheet for any red flags requiring action
- Update any ongoing intervention progress
- Log any significant parent communications

**Incident-based:**
- Behavioral incidents logged same day
- Parent communications logged within 24 hours
- Wellbeing concerns logged immediately

**Termly:**
- Academic snapshots updated from reports
- Intervention reviews scheduled
- Archive/handover preparation

---

## 7. Implementation Plan

### Phase 1: Setup (Week 1)
**Tasks:**
1. Create Google Sheet structure (master tab + template student tab)
2. MARVIN migrates student data from database
3. Create individual tabs for all Y7 and Y8 students (approximately 50 students based on class lists)
4. Set up column formatting, dropdown menus, data validation
5. Configure filter views (by form, by concern type, by intervention status)

**Deliverable:** Functional Google Sheet with all students populated

### Phase 2: Backfill (Week 2-3)
**Tasks:**
1. Review existing tutor reports and extract pastoral notes
2. Log any known ongoing concerns (friendship issues, wellbeing support)
3. Add medical/SEN information from school records
4. Document any current interventions
5. Backfill parent communication from recent term (email search)

**Deliverable:** Current state documented for all students

### Phase 3: Training & Integration (Week 4)
**Tasks:**
1. Brief form tutors on system (if sharing access)
2. Set up MARVIN automation rules
3. Create update routine in your workflow
4. Test MARVIN's ability to update and maintain
5. Establish review cadence (weekly checks)

**Deliverable:** System integrated into daily practice

### Phase 4: Iteration (Ongoing)
**Tasks:**
1. Refine based on actual use
2. Add new fields if needed
3. Archive termly data
4. Generate reports for SLT/parents as needed
5. Year-end handover preparation

**Deliverable:** Continuously improving system

### Realistic Timeline
- **Immediate setup:** 1-2 hours for initial structure
- **Data migration:** MARVIN handles in <30 minutes
- **Backfilling current state:** 3-4 hours (spread across week)
- **Ongoing maintenance:** 20-30 minutes weekly + incident-based updates

**Recommendation:** Start during half term (week of 16 Feb) when you have breathing room. Have system operational for first week back (23 Feb onwards).

---

## 8. Example Layout/Template Design

### Master Sheet (Columns A-L)

| A | B | C | D | E | F | G | H | I | J | K | L |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Student | Form | Tutor | Last Updated | Red Flag | Medical/SEN | Last Parent Contact | Days Since Contact | Current Concerns | Active Interventions | Action Required | Link to Tab |

**Conditional formatting:**
- Red flag column: Red background if any safeguarding concerns
- Days Since Contact: Orange if >28 days, red if >42 days
- Action Required: Bold if "Yes"

**Filter views preset:**
- "All Red Flags"
- "Overdue Parent Contact"
- "Active Interventions"
- "7M", "7S", "8L", "8S" (by form)

### Individual Student Tab Template

**Section 1: Student Overview** (Static reference)
```
Name: [Auto-populate]               DOB: [Auto-populate]
Preferred Name: [Auto-populate]     Form: [Auto-populate]
Tutor: [Auto-populate]             Medical/SEN: [Auto-populate]

Current Academic Snapshot:
Subject     | Effort | Teacher Comment
------------|--------|------------------
[Auto from reports]
```

**Section 2: Pastoral Timeline** (Chronological log)
```
Date | Category | Incident/Note | Action Taken | Staff | Follow-up Required | Follow-up Date
-----|----------|---------------|--------------|-------|-------------------|---------------
```

**Dropdown categories:**
- Academic Concern
- Behavioral Incident
- Wellbeing/Mental Health
- Friendship Issue
- Home Situation
- Medical
- Positive Achievement
- General Note

**Section 3: Parent Communication Log**
```
Date | Type | Initiated By | Topic | Summary | Outcome | Follow-up Required | Follow-up Date
-----|------|--------------|-------|---------|---------|-------------------|---------------
```

**Dropdown types:**
- Phone Call
- Email
- In-Person Meeting
- Zoom/Teams Call
- Brief Conversation (pickup/event)

**Section 4: Interventions**
```
Start Date | Type | SMART Goal | Review Date | Progress Notes (dated) | Outcome | Exit Date
-----------|------|------------|-------------|----------------------|---------|----------
```

**Dropdown intervention types:**
- Academic Support (tutoring/mentoring)
- Pastoral Mentoring
- Counseling Referral
- Buddy System
- Behavior Plan
- Wellbeing Check-ins
- Peer Support
- External Services

**Dropdown outcomes:**
- Continue (progress but goal not met)
- Change (no progress, try different approach)
- Fade (goal met, monitoring continues)
- Exit (successfully resolved)

**Section 5: Achievements & Positives**
```
Date | Achievement | Context | Celebrated How
-----|-------------|---------|---------------
```

---

## 9. How MARVIN Can Maintain This System

### Daily Maintenance Tasks
**MARVIN can:**
1. Check for students with no updates in >7 days (flag for review)
2. Scan your email for parent communications and draft log entries
3. Alert you to upcoming intervention review dates
4. Identify students approaching "overdue parent contact" threshold
5. Generate daily briefing: "3 students have active interventions due review this week"

### Weekly Maintenance Tasks
**MARVIN can:**
1. Update "Last Updated" column for all modified student tabs
2. Generate weekly summary: "This week - 5 pastoral incidents, 2 new interventions, 12 parent contacts"
3. Check for any students with red flags requiring SLT notification
4. Prompt you: "Any updates needed for [students with no activity]?"
5. Prepare draft parent emails based on intervention progress

### Termly Maintenance Tasks
**MARVIN can:**
1. Import effort grades from reports and update academic snapshots
2. Archive previous term's data to separate tabs
3. Generate end-of-term pastoral summary report
4. Identify students requiring summer transition support
5. Prepare handover documents for incoming form tutors

### Incident-Based Updates
**When you tell MARVIN about an incident:**
"Archie had a falling out with Hugo in break - separated them and will monitor"

**MARVIN creates log entry:**
```
Date: 15 Feb 2026
Category: Friendship Issue
Incident: Falling out with Hugo during break time
Action Taken: Students separated, will monitor situation
Staff: JL
Follow-up Required: Yes
Follow-up Date: 22 Feb 2026
```

**MARVIN also:**
- Updates master sheet "Last Updated" field for Archie
- Sets reminder for follow-up on 22 Feb
- Checks Hugo's tab and cross-references if pattern with other students
- Suggests: "Would you like me to draft an email to Archie's parents?"

### Integration with Email System
**MARVIN can scan your `@Role/Head-of-Year` labeled emails and:**
- Detect parent communications and draft log entries
- Flag emails requiring pastoral follow-up
- Suggest which students might need check-ins based on email tone
- Auto-log responses you send to parents (with your approval)

### SMART Goal Setting Assistance
**When you start an intervention:**
You: "Henry needs support with anxiety around tests"

**MARVIN suggests SMART goal:**
```
Specific: Reduce Henry's test-related anxiety
Measurable: Henry self-reports anxiety level <5/10 before tests (currently 8/10)
Attainable: Through weekly check-ins and coping strategy practice
Relevant: Impacting academic performance and wellbeing
Timely: Review progress in 4 weeks (15 March 2026)

Intervention type: Wellbeing Check-ins
Staff involved: JL (weekly), Form Tutor (daily observation)
Progress monitoring: Weekly self-report score + teacher observation notes
```

### Data Analysis & Reporting
**MARVIN can generate on demand:**
- "Show me all students with ongoing friendship issues"
- "How many interventions have we run this term and what were outcomes?"
- "Which students haven't had parent contact in over 30 days?"
- "Generate a summary of 8L's pastoral term for SLT report"
- "Who are my highest-need students requiring weekly monitoring?"

---

## 10. Privacy & Data Protection Considerations

### GDPR Compliance
**This document contains sensitive personal data and must:**
1. Be stored securely (Google Workspace with organizational access controls)
2. Have restricted access (you, SLT, possibly form tutors - not all staff)
3. Be retained according to school policy (typically 25 years for safeguarding)
4. Be backed up securely
5. Not be shared outside school without consent (except statutory safeguarding)

### Access Control Recommendations
**Editor access:** Josh (Head of Year), Deputy Head (Pastoral), Headteacher
**Viewer access:** Form tutors (optional - could be limited to their own form)
**No access:** Other staff, parents, students

**Individual student tabs:** Could be shared selectively for meetings (e.g., share Archie's tab view-only with counselor supporting him)

### Sensitive Information Handling
**Red flag categories requiring special protection:**
- Safeguarding concerns (abuse, neglect)
- Mental health diagnoses
- Family situations (divorce, bereavement, domestic issues)
- Disciplinary matters under investigation

**Best practice:** Separate "high sensitivity" spreadsheet for safeguarding concerns, with even more restricted access. Main tracking sheet references "See safeguarding log" rather than including details.

---

## 11. Success Metrics

### How to Measure if This System is Working

**After 6 months, you should be able to answer:**

1. **Intervention effectiveness:** What % of interventions resulted in "Exit" (successfully resolved)?
   - Target: >70% success rate

2. **Early identification:** How many concerns were identified and addressed before reaching crisis point?
   - Track: Incidents prevented vs reactive responses

3. **Parent engagement:** Average frequency of parent communication per student
   - Target: Minimum 1 contact per term, higher for concern students

4. **Time efficiency:** Are you spending less time searching for information before meetings?
   - Measure: Prep time for parent meetings (should decrease)

5. **SLT confidence:** Can you provide immediate data when SLT asks about a student?
   - Measure: Response time to SLT queries (should be <5 minutes)

6. **Handover quality:** Can incoming Head of Year understand each student's journey?
   - Measure: Feedback from successor

### What Good Looks Like After One Year

**For students:**
- Every student has at least 3 positive achievements logged
- No student has gone >6 weeks without some form of review/update
- All ongoing concerns have documented intervention plans

**For parents:**
- 100% of students have at least 1 parent communication logged per term
- High-need students have fortnightly contact documented
- Parent feedback indicates you know their child well

**For your professional development:**
- System becomes evidence for NPQML/NPQSL application
- Used to generate case studies for leadership training
- Demonstrates whole-school leadership capacity

**For school improvement:**
- SLT uses your model as template for other year groups
- Pastoral care inspection feedback highlights robust tracking
- Early intervention demonstrates safeguarding compliance under 2026 legislation

---

## 12. Potential Challenges & Solutions

### Challenge 1: Time Investment
**Problem:** "I don't have time to update this every week"
**Solution:**
- Start with incident-based updates only (5-10 min/incident)
- MARVIN automates routine updates (student roster, academic grades)
- Block 30 minutes Friday afternoon for weekly review
- Use voice dictation: "MARVIN, log that Matilda had excellent French test today" → MARVIN creates log entry

### Challenge 2: Information Overload
**Problem:** "Too much data, can't see what matters"
**Solution:**
- Master sheet provides high-level view with red flags
- Filter views show only actionable items ("Active Interventions," "Overdue Contact")
- MARVIN daily briefing highlights priority students
- Archive old/resolved issues to separate tabs termly

### Challenge 3: Consistency Across Form Tutors
**Problem:** "Form tutors log different levels of detail"
**Solution:**
- Provide dropdown menus for categories (standardized language)
- Training session on what's worth logging vs trivial
- MARVIN prompts: "Any updates on students in your form this week?"
- Share examples of good log entries

### Challenge 4: Keeping It Current
**Problem:** "System gets out of date if I'm busy/absent"
**Solution:**
- MARVIN flags students with no updates in >7 days
- Delegate some updates to form tutors (with oversight)
- Accept that some weeks have light updates (not every student has weekly changes)
- Catch-up prompts: "You haven't updated Isla in 10 days - anything to note?"

### Challenge 5: Integration with School Systems
**Problem:** "School has its own tracking system (ISAMS/MIS)"
**Solution:**
- This is supplementary pastoral detail, not replacement for MIS
- MIS = official records (attendance, sanctions, achievements)
- This sheet = pastoral narrative and intervention tracking
- Think of it as your "field notes" that inform official records

---

## 13. Next Steps: Getting Started

### Action Plan for Next Week (Half Term)

**Monday 16 Feb:**
1. Review this recommendation
2. Decide on structure tweaks (any fields to add/remove?)
3. Create Google Sheet template (or ask MARVIN to do it)

**Tuesday 17 Feb:**
4. MARVIN migrates student data from marvin.db
5. Set up master sheet with all Y7 and Y8 students
6. Create individual student tabs (MARVIN can automate)

**Wednesday 18 Feb:**
7. Backfill known pastoral information from current term
8. Add any active interventions/concerns
9. Log recent parent communications (email search)

**Thursday 19 Feb:**
10. Test MARVIN's update capabilities
11. Create template responses for common scenarios
12. Set up filter views and conditional formatting

**Friday 20 Feb:**
13. Final review and adjustments
14. Prepare brief for form tutors (if giving them access)
15. Set Monday reminder: start using system daily

**Week of 23 Feb (First week back):**
16. Use system for all parent communications and pastoral incidents
17. Evaluate: What's working? What needs tweaking?
18. Refine MARVIN automation based on actual use
19. Weekly review: Friday afternoon, 30 minutes

### Questions to Resolve Before Starting

1. **Access control:** Will form tutors have access to their forms, or just you?
2. **Backfilling depth:** How far back to log information? (Recommend: this academic year only)
3. **Integration preference:** Should MARVIN auto-log emails to parents, or prompt you for approval?
4. **Alert thresholds:** What triggers MARVIN to flag a student? (No contact >28 days? >42?)
5. **Sharing with SLT:** Regular reports, or on-demand only?

---

## Conclusion

A comprehensive Year 7 and 8 student tracking system in Google Sheets provides:

**For students:** Early identification of concerns, consistent support, holistic care that links academic and pastoral needs

**For parents:** Demonstrated deep knowledge of their child, evidence-based interventions, regular communication

**For you:** Efficient information management, evidence for career progression, compliance with safeguarding requirements, whole-school leadership demonstration

**For the school:** Robust pastoral care system, inspection-ready documentation, model for other year groups, integration with 2026 safeguarding legislation

With MARVIN maintaining the system, you gain the benefits of comprehensive tracking without unsustainable time investment. The system becomes a strategic asset for your Head of Year role and your progression toward senior leadership.

**Estimated time investment:**
- Setup: 4-6 hours (one-off, mostly during half term)
- Weekly maintenance: 20-30 minutes
- Incident updates: 5 minutes per incident
- Termly reviews: 2 hours

**Return on investment:**
- Parent meeting prep time: Cut from 15 minutes to 5 minutes
- SLT query response: Instant data vs 30+ minutes searching
- Intervention effectiveness: Measurable improvement in student outcomes
- Career progression: Concrete evidence of pastoral leadership

---

## Sources & Further Reading

### UK Pastoral Care Best Practices
- [TES - Safeguarding and Pastoral Care Changes 2026](https://www.tes.com/magazine/analysis/general/safeguarding-policy-changes-for-schools)
- [Sec-Ed - Effective Wellbeing and Pastoral Care](https://www.sec-ed.co.uk/content/best-practice/ideas-for-effective-pastoral-care-in-schools)
- [Lord Wandsworth - Outstanding Pastoral Care in UK Schools](https://www.lordwandsworth.org/news/insights/outstanding-pastoral-care-uk-schools/)
- [Luckley House - Role of Pastoral Care in Independent Schools](https://www.luckleyhouseschool.org/the-role-of-pastoral-care-in-independent-schools/)

### Student Tracking and Documentation
- [Schoolbox - Student Wellbeing and Pastoral Care](https://schoolbox.education/student-wellbeing-and-pastoral-care/)
- [iSAMS - Wellbeing Manager for Safeguarding](https://www.isams.com/platform/modules/wellbeing-manager/)
- [Hatching Dragons - Pastoral Care in Schools](https://www.hatching-dragons.com/blog/pastoral-care-schools)

### Google Sheets for Education
- [The Bricks - Google Sheets vs Google Docs](https://www.thebricks.com/resources/google-sheets-vs-google-docs-which-tool-is-best)
- [Control Alt Achieve - Google Sheets for Educators](https://www.controlaltachieve.com/2023/03/google-sheets-for-educators.html)
- [MiddleWeb - Using Google Sheets to Track Student Data](https://www.middleweb.com/46536/how-i-use-google-sheets-to-track-student-data/)

### Parent Communication Logs
- [Template Lab - Parent Contact Logs](https://templatelab.com/parent-contact-logs/)
- [Appletastic Learning - Parent Communication Log](https://appletasticlearning.com/product/parent-communication-log-and-student-behavior-log-and-forms/)

### Intervention Tracking and Progress Monitoring
- [NCII - Progress Monitoring Data & Goal Setting](https://intensiveintervention.org/data-based-individualization/progress-monitoring)
- [Frontline Education - Monitor Progress on Tier 1 Interventions](https://www.frontlineeducation.com/blog/monitor-progress-tier-1-classroom-interventions/)
- [Panorama - Progress Monitoring Fundamentals](https://www.panoramaed.com/blog/progress-monitoring-fundamentals-mtss-rti)
- [Illuminate Education - How to Monitor Interventions](https://www.illuminateed.com/blog/2022/03/how-to-monitor-interventions-effectively-and-ensure-intervention-fidelity/)

### Career Progression for Heads of Year
- [TES - How to Become a Head of Year](https://www.tes.com/jobs/careers-advice/leadership/how-become-head-year)
- [Quarterdeck - Leadership Jobs in Education](https://quarterdeck.co.uk/articles/leadership-jobs-in-education)
- [CPD Online - How to Become a Headteacher](https://cpdonline.co.uk/career-guides/how-to-become-a-headteacher/)

---

**Document prepared by:** MARVIN (AI Chief of Staff)
**Research completed:** 15 February 2026
**Ready for implementation:** Week of 16 February 2026 (half term)
