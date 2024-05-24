document.addEventListener('DOMContentLoaded', () => {
    const monthlyBtn = document.getElementById('monthlyBtn');
    const dailyBtn = document.getElementById('dailyBtn');
    const calendarView = document.getElementById('calendarView');
    const dailyView = document.getElementById('dailyView');
    const currentMonth = document.getElementById('currentMonth');
    const prevMonth = document.getElementById('prevMonth');
    const nextMonth = document.getElementById('nextMonth');
    const todos = document.getElementById('todos');
    const addBtn = document.getElementById('addBtn');
    const currentDay = document.getElementById('currentDay');

    const addTodoModal = document.getElementById('addTodoModal');
    const closeBtn = document.querySelector('.close-btn');
    const saveTodoBtn = document.getElementById('saveTodoBtn');
    const newTodoInput = document.getElementById('newTodoInput');

    let currentView = 'monthly';
    let selectedDate = '2023-05-23'; // Example date

    const toDoItems = {
        '2023-05-23': ['Meeting at 10 AM', 'Lunch at 1 PM'],
        '2023-05-24': ['Project deadline'],
    };

    monthlyBtn.addEventListener('click', () => {
        currentView = 'monthly';
        updateView();
    });

    dailyBtn.addEventListener('click', () => {
        currentView = 'daily';
        updateView();
    });

    addBtn.addEventListener('click', () => {
        newTodoInput.value = '';
        addTodoModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        addTodoModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === addTodoModal) {
            addTodoModal.style.display = 'none';
        }
    });

    saveTodoBtn.addEventListener('click', () => {
        const newTodo = newTodoInput.value.trim();
        if (newTodo) {
            if (!toDoItems[selectedDate]) {
                toDoItems[selectedDate] = [];
            }
            toDoItems[selectedDate].push(newTodo);
            updateView();
            addTodoModal.style.display = 'none';
        }
    });

    function updateView() {
        if (currentView === 'monthly') {
            calendarView.style.display = 'block';
            dailyView.style.display = 'none';
            renderCalendar();
        } else {
            calendarView.style.display = 'none';
            dailyView.style.display = 'block';
            renderTodos();
        }
        document.querySelector('.toggle button.active').classList.remove('active');
        if (currentView === 'monthly') {
            monthlyBtn.classList.add('active');
        } else {
            dailyBtn.classList.add('active');
        }
    }

    function renderCalendar() {
        const calendar = document.getElementById('calendar');
        calendar.innerHTML = `
            <tr>
                <th>Mo</th>
                <th>Tu</th>
                <th>We</th>
                <th>Th</th>
                <th>Fr</th>
                <th>Sa</th>
                <th>Su</th>
            </tr>
            <tr>
                <td>01</td>
                <td>02</td>
                <td>03</td>
                <td>04</td>
                <td>05</td>
                <td>06</td>
                <td>07</td>
            </tr>
            <tr>
                <td>08</td>
                <td>09</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
            </tr>
            <tr>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
            </tr>
            <tr>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
            </tr>
        `;
    }

    function renderTodos() {
        todos.innerHTML = '';
        const items = toDoItems[selectedDate] || [];
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                toDoItems[selectedDate].splice(index, 1);
                updateView();
            });
            li.appendChild(deleteBtn);
            todos.appendChild(li);
        });
        currentDay.textContent = '4th March 2018'; // Update this to reflect the actual selected date
    }

    updateView();
});
