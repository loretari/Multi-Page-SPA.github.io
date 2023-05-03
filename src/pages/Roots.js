import { Outlet } from 'react-router-dom';
import ManiNavigation from "../components/MainNavigation";


function RootLayout () {
return (
    <>
  <ManiNavigation/>
        <main>
            <Outlet />
        </main>

    </>
        )

}
export default RootLayout;