function handleChange(element) {
    const container = document.querySelector(".container");
    switch (element.value) {
        // flex direction starts here 
        case "row":
            container.style.flexDirection = "row";
            break;
        case "column":
            container.style.flexDirection = "column";
            break;
        // flex direction ends here 
        case "flex-start":
            if (element.name == "align-items") {
                container.style.alignItems = "flex-start";
            }
            else if (element.name == "align-content") {
                container.style.alignContent = "flex-start";
            }
            else {
                container.style.justifyContent = "flex-start";
            }
            break;
        case "flex-end":
            if (element.name == "align-items") {
                container.style.alignItems = "flex-end";
            }
            else if (element.name == "align-content") {
                container.style.alignContent = "flex-end";
            }
            else {
                container.style.justifyContent = "flex-end";
            }
            break;
        case "center":
            if (element.name == "align-items") {
                container.style.alignItems = "center";
            }
            else if (element.name == "align-content") {
                container.style.alignContent = "center";
            }
            else {
                container.style.justifyContent = "center";
            }
            break;
        case "space-between":
            if(element.name =="align-content"){
                container.style.alignContent = "space-between";
            }
            else{
                container.style.justifyContent = "space-between";
            }
            break;
        case "space-evenly":
            container.style.justifyContent = "space-evenly";
            break;
        case "space-around":
            if(element.name =="align-content"){
                container.style.alignContent = "space-around";
            }
            else{
                container.style.justifyContent = "space-around";
            }
            break;
        case "nowrap":
            container.style.flexWrap = "nowrap";
            break;
        case "wrap":
            container.style.flexWrap = "wrap";
            break;
        case "wrap-reverse":
            container.style.flexWrap = "wrap-reverse";
            break;
        case "baseline":
                container.style.alignItems = "baseline";

            break;
        case "stretch":
            if (element.name == "align-items") {
                container.style.alignItems = "stretch";
            }
            else {
                container.style.alignContent = "stretch";
            }
            break;
        default:
            console.log("Error");
            break;
    }
}