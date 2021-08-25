export default function formattedDate(props) {
let days = ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday"];

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December",];

let day = days[props.date.getDay()];

let date = props.date.getDate();

let month = months[props.date.getMonth()];

let hours = props.date.getHours();
if(hours < 10) {
    hours = `0${hours}`;
}

let minutes = props.date.getMinutes();
if(minutes < 10) {
    minutes = `0${minutes}`;
}


return <div>
    {month} {date}, {day} {hours}:{minutes}
</div>
}