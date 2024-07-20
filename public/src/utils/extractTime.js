export function extractTime(dateString){
    const date = new Date(dateString);
    const hours = padzero(date.getHours());
    const minutes = padzero(date.getMinutes());
    return `${hours}:${minutes}`;
}

function padzero(number){
    return number.toString().padStart(2,"0");
}