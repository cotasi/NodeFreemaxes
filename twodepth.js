const mysql2 = require('mysql2');
const fs = require('fs');

const connects = mysql2.createConnection({
    host: '127.0.0.1',
    user: 'haruka135',
    password: 'gkfpa135@',
    database: 'haruka',
});

const menuquery = 'Select submenu_table.*,menu_table.* from menu_table inner join submenu_table on menu_table.menu_id = submenu_table.menu_id';
const regquery = 'Select reservation_main.*,reservation_sub.* from reservation_main inner join reservation_sub on reservation_main.main_id = reservation_sub.main_id';
const tabquery = 'select tabs.*,subtabs.*,tabcon.* from tabs left join subtabs on tabs.maintabnum = subtabs.maintabnum left join tabcon on subtabs.subtabnum = tabcon.subtabnum;';

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

connects.query(regquery,(error,results2,fields)=>{
    if(error) {
        console.log('에러 메시지:',error);
        throw error;
    }

    const data2 = results2.reduce((acc2,item)=>{
        const { main_id, regions, sub_id, com } = item;

        if(!acc2[main_id]) {
            acc2[main_id]= {
                main_id,
                regions,
                detail: [],
            };
        }

        acc2[main_id].detail.push({
            sub_id,
            com
        });

        return acc2;
    },[]);

    const final2result = Object.values(data2);

    const json2 = './front/src/Data/businfo.json';
    fs.writeFileSync(json2,JSON.stringify(final2result,null,2));

    console.log('JSON DATA');


});

connects.query(tabquery,(error,results3,fields)=>{
    if(error) {
        console.log('에러 메시지:',error);
        throw error;
    }

    const data3 = results3.reduce((acc3,item)=>{
        const { maintabnum,maintabname, subtabnum,category,tabimg,tag,concluder } = item;

        if(!acc3[maintabnum]) {
            acc3[maintabnum]= {
                maintabnum,
                maintabname,
                reg: [],
            };
        }

        acc3[maintabnum].reg.push({
            subtabnum,
            category,
            tabimg,
            tag,
            concluder
        });

        return acc3;
    },[]);

    const final3result = Object.values(data3);

    const json3 = './front/src/Data/tabs.json';
    fs.writeFileSync(json3,JSON.stringify(final3result,null,3));

  /*   console.log('JSON DATA');

    connects.end(); */
});



