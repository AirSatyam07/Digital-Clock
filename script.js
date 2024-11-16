function fetchTime(){
    const now=new Date();
    let h=now.getHours()
    const m=now.getMinutes()
    const s=now.getSeconds()
    const timeline=(h>=12)?'PM':'AM';
    h=h%12 || 12;
    document.getElementById('hours').textContent=String(h).padStart(2,'0');
    document.getElementById('minutes').textContent=String(m).padStart(2,'0');
    document.getElementById('seconds').textContent=String(s).padStart(2,'0');
    document.getElementById('timeline').textContent=timeline;
    
}
setInterval(fetchTime,1000);
