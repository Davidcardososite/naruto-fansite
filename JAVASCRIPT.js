
        var menuImage = document.getElementById("menuImage");
        var menuButtonContainer = document.getElementById("menuButtonContainer");
        var isOpen = false;

        function toggleMenu() {
            var menu = document.getElementById("menu");

            if (isOpen) {
                menu.style.opacity = 0;
                menu.style.height = "0";
                menu.style.width = "0";
                menuImage.src = "https://wayofshinobi.weebly.com/uploads/1/1/9/6/11961180/470674137_orig.png";
            } else {
                menu.style.opacity = 1;
                menu.style.height = "100%";
                menu.style.width = "150px";
                menuImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Mangekyou_Sharingan_Kakashi.svg/1200px-Mangekyou_Sharingan_Kakashi.svg.png";
            }

            isOpen = !isOpen;
        }

        // Fecha o menu ao clicar fora do menu
        window.addEventListener("click", function (event) {
            if (isOpen && !menuButtonContainer.contains(event.target) && !menu.contains(event.target)) {
                toggleMenu();
            }
        });

