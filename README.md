# Console-based-task-manager


### a. Description of the Application

#### What the Task Manager Does

This application allows users to manage a temporary list of to-do items directly through their terminal. It provides a menu-driven interface to perform essential task management operations like adding, viewing, completing, and deleting tasks.

#### Implemented Functionalities

  * **List Tasks (1):** Displays all current tasks with their associated ID and completion status (`[ ]` for pending, `[x]` for complete).
  * **Add New Task (2):** Prompts the user to enter a new task name and adds it to the list as pending.
  * **Mark Task as Complete (3):** Prompts the user for a task ID and updates its status to complete (`[x]`).
  * **Delete Task (4):** Prompts the user for a task ID and removes it from the list.
  * **Exit (5):** Terminates the application.

#### Additional Features

  * **Simple Status Tracking:** Tasks are visually tracked using `[ ]` (pending) and `[x]` (completed) prefixes.

-----

### b. How to Run the Application

#### 📦 Prerequisites

  * **Node.js Version:** This application requires **Node.js** (any recent version, e.g., **16.x or higher**).
      * *You can verify your version by running `node -v` in your terminal.*

#### ⚙️ Installation

1.  **Clone the Repository:**
    ```bash
    git clone [Placeholder: Your Repository URL]
    cd [Placeholder: Your Project Directory Name]
    ```
2.  **No Dependencies Required:**
    This application uses only the built-in Node.js `readline` module, so no `npm install` is necessary.

#### ▶️ Execution

1.  **Save the Code:**
    Ensure the provided code is saved in a file named, for example, `taskmanager.js`.

2.  **Run the Program:**
    Execute the file using Node.js:

    ```bash
    node taskmanager.js
    ```

3.  **Interactive Usage Example:**
    Upon running, you will see the main menu and can interact by entering the corresponding number:

    ```
    Welcome to Task manager! 

    1.List tasks
    2.Add new task
    3.Mark task as complete
    4.Delete task
    5.Exit

    Enter your choice: 2
    Enter new task name: Write README file
    ✅ Task added!

    Welcome to Task manager! 
    ...
    Enter your choice: 1

    Your Tasks:
    1. [ ] Write README file

    Welcome to Task manager! 
    ...
    Enter your choice: 5
    👋 Exiting program. Goodbye!
    ```

#### ⚠️ Usage Notes or Limitations

  * **No Data Persistence:** All tasks are stored in memory while the application is running. **Exiting the program (Choice 5) will erase all tasks.** Tasks must be re-added upon the next execution.
  * **Sequential IDs:** Task IDs are assigned sequentially starting from 1 and continue incrementing, even after a task is deleted.

-----
