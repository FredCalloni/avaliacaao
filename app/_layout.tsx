import { Drawer } from "../Drawer";
import { Link } from "expo-router";

export default function AppLayout() {
    return(
        <Drawer>
            <Drawer.Screen
            name="index"
            options= {{
                drawerLabel:"/home",
                title:"overview"
            }}
            />
            <Drawer.Screen
            name="home"
            options= {{
                drawerLabel:"/index",
                title:"overview"
            }}
            />
            <Drawer.Screen
            name="cadastro"
            options= {{
                drawerLabel:"null",
                title:"overview"
            }}
            />
            <Drawer.Screen
            name="sobre"
            options= {{
                drawerLabel:"null",
                title:"overview"
            }}
            />
        </Drawer>
    )
}