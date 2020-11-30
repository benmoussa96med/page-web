const productList={
     products :[
        {
        title:'A pillow',
        imageutl:'https://europe.shopmarriott.com/media/catalog/product/cache/13/image/533x351/9df78eab33525d08d6e5fb8d27136e95/m/a/mareu-108-ff_lrg.jpg',
        Price:19.99,
        DEscription:'A soft pillow'
    },
    {
    title:'A carpet',
    imageutl:'https://www.replacementceilingtilesuk.co.uk/wp-content/uploads/2019/10/Dahlia-Moonfire-1.jpg',
    Price:79.99,
    DEscription:'A carpet which you might Like - or not.'
    }
    ],
    render(){
        const renderhook=document.querySelector('#app');
        const prodList=document.createElement('ul');
        prodList.className='product-list';
        for (const pro of this.products){
            const prodEL=document.createElement('li');
            prodEL.className='product-item';
            prodEL.innerHTML=`
            <div>
            <img src="${pro.imageutl}" alt="${pro.title}">
            <div class="product-item__content">
            <h2>${pro.title}</h2>
            <h3>\$${pro.Price}</h3>
            <p>${pro.DEscription}</p>
            <button>Add to Cart</button>
            </div>
            </div>
            `;
            prodList.append(prodEL);
        }
        renderhook.append(prodList);
    }
};

productList.render();