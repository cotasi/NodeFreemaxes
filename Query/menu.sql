select menu_table.*,submenu_table.* from menu_table left join
submenu_table on menu_table.menu_id = submenu_table.menu_id;