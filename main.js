document.addEventListener("DOMContentLoaded", function () {
    const devicons = document.querySelectorAll("i[class^='devicon-']");

    devicons.forEach((icon) => {
        icon.addEventListener("mouseover", () => {
            let classes = icon.className.split(" ").filter(c => c !== "colored");
            classes.push("colored");
            icon.className = classes.join(" ");
        });

        icon.addEventListener("mouseout", () => {
            icon.className = icon.className.replace(/\bcolored\b/g, "").trim();
        });
    });
});