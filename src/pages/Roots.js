import { Outlet } from 'react-router-dom';
import ManiNavigation from "../components/MainNavigation";
import classes from './Root.module.css'

function RootLayout () {
return (
    <>
  <ManiNavigation/>
        <main className={classes.content}>
            <Outlet />
        </main>

    </>
        )

}
export default RootLayout;