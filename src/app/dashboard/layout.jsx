// using this to create a layout for the dashboard which contains the sidebar and the navbar

import NavBar from "../_components/dashboard/navbar/navbar";
import SideBar from "../_components/dashboard/sidebar/sidebar";
import styles from "../_components/dashboard/dashboard.module.css";

const Layout = ({children}) => {
    return(
        <div className={styles.container}>
            <div className={styles.menu}>
                <SideBar />
            </div>
            <div className={styles.content}>
                <NavBar />
                {children}
            </div>
        </div>
    );
}

export default Layout;