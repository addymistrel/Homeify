import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProfilePage from "./components/Main/ProfileActions/ProfilePage";
import Trends from "./components/Personal/Somya/Cards/Furniture";
import ProductsPage from "./components/Main/Products/ProductsDisplayPage";
import TrackPage from "./components/Main/ProfileActions/TrackPage";
import WalletPage from "./components/Main/ProfileActions/WalletPage";
import { ErrorPage } from "./components/Main/ErrorPage/ErrorPage";
import Dummy from "./components/Personal/Aditya/Dummy/Dummy";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import AddressAdditon from "./components/Main/ProfileActions/AddressAdditon";
import AllAddressPage from "./components/Main/ProfileActions/AllAddressPage";
import CardLandingPage from "./components/Main/ProfileActions/CreditCard/CardManager/AddCard/CardLandingPage";
import CartPage from "./components/Main/Cart/CartPage";
import AllCards from "./components/Main/ProfileActions/AllCards";
import SpecificProduct from "./components/Main/SpecificProduct/SpecificProduct";
import ProductsMover from "./components/Main/Products/ProductsMover/ProductsMover";
import Checkout from "./components/Main/CheckOut/Checkout";
import Franchise from "./components/Main/Products/Addons/franchise/baf";
import Bulky from "./components/Main/Products/Addons/bulky/bulky";
import Sell2 from "./components/Main/Products/Addons/sell_on_homeify/sell2";

axios.defaults.baseURL = "https://homeify-three.vercel.app/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sell" element={<Sell2 />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/bulk" element={<Bulky />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/categories" element={<ProductsMover />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders" element={<TrackPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/editaddress" element={<AddressAdditon />} />
          <Route path="/addresses" element={<AllAddressPage />} />
          <Route path="/allcards" element={<AllCards />} />
          <Route path="/dummy" element={<Dummy />} />
          <Route path="/creditCard" element={<CardLandingPage />} />
          <Route path="/productdetails" element={<SpecificProduct />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
