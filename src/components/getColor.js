export const getColor = (theme, type) => {
    if (theme === "light") {
        if (type === "bg") {
            return "#F5F5F5"
        } else if (type === "primary") {
            return "#3F37C9"
        } else if (type === "secondary") {
            return "#4895EF"
        } else if (type === "bg2") {
            return "#FEFEFE"
        }
    } else if (theme === "dark") {
        if (type === "bg") {
            return "#1B1B1B"
        } else if (type === "primary") {
            return "#F4F4F4"
        }
        else if (type === "secondary") {
            return "#292929"
        } else if (type === "bg2") {
            return "#242424"
        }
    }
}