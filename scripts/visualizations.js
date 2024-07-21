let speed = 1000;  // Changed from const to let

inp_aspeed.addEventListener("input", vis_speed);

function vis_speed() {
    const array_speed = parseInt(inp_aspeed.value);  // Ensure array_speed is parsed to an integer
    switch(array_speed) {
        case 1: speed = 1; break;
        case 2: speed = 10; break;
        case 3: speed = 100; break;
        case 4: speed = 1000; break;
        case 5: speed = 10000; break;
    }
    delay_time = 10000 / (Math.floor(array_size / 10) * speed);  // Recalculate delay_time whenever speed is changed
}

let delay_time = 10000 / (Math.floor(array_size / 10) * speed);  // Initial calculation
let c_delay = 0;  // This is updated on every div change so that visualization is visible

function div_update(cont, height, color) {
    window.setTimeout(function() {
        cont.style = `margin: 0% ${margin_size}%; width: ${100 / array_size - (2 * margin_size)}%; height: ${height}%; background-color: ${color};`;
    }, c_delay += delay_time);
}

function enable_buttons() {
    window.setTimeout(function() {
        for (let i = 0; i < butts_algos.length; i++) {
            butts_algos[i].classList = [];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled = false;  
            inp_as.disabled = false;
            inp_gen.disabled = false;
            inp_aspeed.disabled = false;
        }
    }, c_delay += delay_time);
}
