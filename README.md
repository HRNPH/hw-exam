# Huawei Cloud Certification Exam Application

## Overview

This application is an interactive web-based testing platform designed for Huawei Cloud certification exams. It features a clean, user-friendly interface with a light and orange theme that enhances the exam-taking experience.

## Features

### Exam Interface

- **Question Navigation**: Move through questions sequentially or jump to specific questions
- **Progress Tracking**: Visual progress bar and question count display
- **Timer**: Countdown clock showing remaining exam time
- **Search Functionality**: Filter questions by ID or content
- **Responsive Design**: Works on desktop and mobile devices

### Question Types

- **Single-select**: Traditional multiple choice questions with one correct answer
- **Multi-select**: Questions requiring selection of multiple correct answers

### Results System

- **Automatic Scoring**: Instant calculation of results upon submission
- **Score Review**: Detailed breakdown of correct and incorrect answers
- **Explanations**: Access to explanations for each question
- **Pass/Fail Indication**: Clear visual indication of exam outcome

## Technical Details

### Built With

- React.js with TypeScript
- Tailwind CSS for styling
- Client-side state management

### Application Structure

- The app uses React Hooks for state management
- Questions and answer data are stored in external configuration files
- Timer functionality auto-submits when time expires

## Getting Started

### Prerequisites

- Node.js (v14.0 or higher)
- NPM or Yarn package manager

### Installation

1. Clone the repository

```
git clone <repository-url>
```

2. Install dependencies

```
npm install
```

3. Run the development server

```
npm run dev
```

### Configuration

The exam questions are configured in the `lib/const.js` file. You can modify:

- Question content
- Answer options
- Correct answers
- Explanations
- Time limits

## Usage

1. Start the exam by visiting the application URL
2. Answer questions by selecting options (click radio buttons for single-select, checkboxes for multi-select)
3. Navigate between questions using the Next/Previous buttons or the question navigator
4. Submit the exam when finished or let the timer auto-submit
5. Review your results and explanations

## License

This project is licensed under the MIT License - see the LICENSE file for details.
