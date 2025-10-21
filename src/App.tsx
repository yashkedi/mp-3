import Root from "./components/Root.tsx";
import { RouterProvider, createBrowserRouter } from "react-router";


export default function App() {

  const router = createBrowserRouter(
      [
        {path:"*",Component:Root}
      ]
  );

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}


