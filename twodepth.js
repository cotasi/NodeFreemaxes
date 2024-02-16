const mysql2 = require('mysql2');
const fs = require('fs');

const connects = mysql2.createConnection({
    host: '127.0.0.1',
    user: 'haruka135',
    password: 'gkfpa135@',
    database: 'haruka',
});

const menuquery = 'Select submenu_table.*,menu_table.* from menu_table inner join submenu_table on menu_table.menu_id = submenu_table.menu_id';
const tabquery = 'select tabs.*,subtabs.*,tabcon.* from tabs left join subtabs on tabs.maintabnum = subtabs.maintabnum left join tabcon on subtabs.subtabnum = tabcon.subtabnum;';
const productquery = 'select products_table.*,products_detail.* from products_table left join products_detail on products_table.products_id = products_detail.products_id';

connects.query(menuquery,(error,results1,fields)=>{
    if(error) {
        console.log('에러 메시지:',error);
        throw error;
    }

    const data1 = results1.reduce((acc,item)=>{
        const { menu_id, submenu_id, name, href, menu1, menuen, href1 } = item;

        if(!acc[menu_id]) {
            acc[menu_id]= {
                menu_id,
                menu1,
                menuen,
                href1,
                menu2: [],
            };
        }

        acc[menu_id].menu2.push({
            submenu_id,
            name,
            href
        });

        return acc;
    },[]);

    const final1result = Object.values(data1);

    const json1 = './front/src/Data/menuback.json';
    fs.writeFileSync(json1,JSON.stringify(final1result,null,2));

    console.log('JSON DATA');

});


connects.query(productquery,(error,results4,fields)=>{
    if(error) {
        console.log('에러 메시지:',error);
        throw error;
    }

    const data4 = results4.reduce((acc4,item)=>{
        const { products_id,product_category, models, detail_id, products_name, products_path, products_com, products_price } = item;

        if(!acc4[products_id]) {
            acc4[products_id]= {
                products_id,
                product_category,
                models,
                pdetail: []
            };
        }

        acc4[products_id].pdetail.push({
            products_id,
            detail_id,
            products_name,
            products_path,
            products_com,
            products_price
        });

        return acc4;
    },[]);

    const final4result = Object.values(data4);

    const json4 = './front/src/Data/products.json';
    fs.writeFileSync(json4,JSON.stringify(final4result,null,2));

    console.log('JSON DATA');

    connects.end();
});



