const Cards = function(name,phone){
    this.name = name;
    this.phone = phone;
    this.addElement = function(cls,value){
        const el = document.createElement('div');
        el.setAttribute('class',cls);
        el.innerHTML = value;
        return el;
    }
    this.createItems = function(){
        const ico = this.name.split("");
        const photo = this.addElement('photo',ico[0]);

        const close = this.addElement('close','x');
        close.setAttribute('title','Delete Contact');

        const name = this.addElement('name',this.name);

        const phone = this.addElement('phone',this.phone);

        const card = this.addElement('card','');
        card.appendChild(photo);
        card.appendChild(close);
        card.appendChild(name);
        card.appendChild(phone);

        return card;
    }
}


const addItem = document.getElementsByTagName('button')[0];
addItem.addEventListener('click',function(e){
    const name = prompt('Contact Name : ');
    const phone = prompt('Contact Number : ');
    const card = new Cards(name,phone);
    e.target.parentNode.appendChild(card.createItems());
});

const container = document.querySelector('.container');
container.addEventListener('click',function(e){
    if(e.target.className == 'close'){
        let con = confirm('Delete This Contact?');
        if(con==true){
            e.target.parentNode.style.display = 'none';
        }
    }
});