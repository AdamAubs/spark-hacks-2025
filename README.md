
# [LiteBoard](https://spark-hacks-2025.vercel.app/)

Our project is a clone of the learning management tool BlackBoard. The goal was to simplify the design of blackboard, making it easier to use for students and teachers.

To run our app first clone the app to one of your directory's by running

```bash
git clone https://github.com/your-repo/spark-hacks-2025.git
cd spark-hacks-2025
```

Then run to install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```

## Key Features:
- Course home page

  Displays enrolled courses and their announcements. These components are clickable and lead to the courses page.
- Courses pages

  Shows upcoming assignments and accouncmence for the class.
  
- Grades Overview
  
  Displays grades in a structured table/grid format with the given percentages.
  
- Calendar Integration

  Uses FullCalendar to manage and display events.

- Responsive UI

  Built with reusable UI components for a modern experience.

## Tech Stack:
- Frontend: React (Vite) for fast development and optimized builds.
- Styling: Tailwind CSS and standard CSS
- Data: Static JSON files for mock data (courses, assignments, announcements)

