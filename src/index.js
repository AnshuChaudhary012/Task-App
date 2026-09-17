
        const tasks = document.getElementById("tasks");
        const input = document.getElementById("input");
        const form = document.querySelector("form");

        function addTask() {
            const taskText = input.value.trim();

            // Don't add empty task
            if (taskText === "") return;

            // Create a NEW task every time
            const task = document.createElement("div");

            task.className =
                "task-card cursor-pointer bg-white border border-black/10 rounded-[5px] transition-all duration-300 ease-in-out hover:shadow-card shrink-0 h-[64px] py-[22px] px-[19px] hover:shadow-[0px_5px_17px_0px_#0000001A] translate-y-3";

            task.innerHTML = `
            <div class="card-content flex justify-between items-center ">

                <p class="task font-normal w-full  text-base">
                    ${taskText}
                </p>

                <div class="svgs flex gap-3.75">

                    <!-- Complete button -->
                    <button type="button" class="complete-btn group cursor-pointer">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g class="group-hover:opacity-100" opacity="0.5">
                                <path
                                    d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
                                    fill="black"
                                />
                                <path
                                    d="M9.99909 13.587L7.70009 11.292L6.28809 12.708L10.0011 16.413L16.7071 9.707L15.2931 8.293L9.99909 13.587Z"
                                    fill="black"
                                />
                            </g>
                        </svg>
                    </button>

                    <!-- Delete button -->
                    <button type="button" class="delete-btn group cursor-pointer">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g class="group-hover:opacity-100" opacity="0.5">
                                <path
                                    d="M5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V8H21V6H17V4C17 3.46957 16.7893 2.96086 16.4142 2.58579C16.0391 2.21071 15.5304 2 15 2H9C8.46957 2 7.96086 2.21071 7.58579 2.58579C7.21071 2.96086 7 3.46957 7 4V6H3V8H5V20ZM9 4H15V6H9V4ZM8 8H17V20H7V8H8Z"
                                    fill="black"
                                />
                                <path
                                    d="M9 10H11V18H9V10ZM13 10H15V18H13V10Z"
                                    fill="black"
                                />
                            </g>
                        </svg>
                    </button>

                </div>
            </div>
        `;

            // Add task to the page
            tasks.appendChild(task);

            // Clear input
            input.value = "";

            // Complete task
            const completeBtn = task.querySelector(".complete-btn");

            completeBtn.addEventListener("click", () => {
                task.querySelector(".task").classList.toggle("line-through");
                task.querySelector(".task").classList.toggle("opacity-50");
            });

            // Delete task
            const deleteBtn = task.querySelector(".delete-btn");

            deleteBtn.addEventListener("click", () => {
                task.remove();
            });
        }

        // Form submit
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            addTask();
        });
    