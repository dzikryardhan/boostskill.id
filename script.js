document.querySelectorAll('.chip').forEach(function(chip){
  chip.addEventListener('click',function(){
    var f=chip.dataset.filter;
    document.querySelectorAll('.chip').forEach(function(c){c.classList.toggle('on',c===chip)});
    document.querySelectorAll('#cards .card').forEach(function(card){card.hidden=!(f==='all'||card.dataset.group===f)});
  });
});
