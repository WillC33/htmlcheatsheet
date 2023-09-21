// function to copy the code snippet in the tag card
document.addEventListener("DOMContentLoaded", function() {
    const tags = document.querySelectorAll(".tag");

    tags.forEach((tag) => {
        tag.addEventListener("click", function() {
            const codeElement = this.querySelector("code");
            const codeText = codeElement.innerText;

            const textarea = document.createElement("textarea");
            textarea.value = codeText;
            document.body.appendChild(textarea);

            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);

            // dims bg
            tag.style.backgroundColor = "#aaffaa";
            setTimeout(() => {
                tag.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
            }, 500);
        });
    });
});
