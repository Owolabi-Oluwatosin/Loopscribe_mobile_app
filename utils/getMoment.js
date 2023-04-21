
const getMoment = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let year = d.getFullYear();
    let month = months[d.getMonth()];
    let hour = d.getHours();
    let minute = d.getMinutes();
    let ampm = hour >= 12 ? 'pm' : 'am';
    let time = hour + ":" + minute + ampm;
    return ({ month, year, time });
}

export default getMoment;