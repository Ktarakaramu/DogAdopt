import {render,fireEvent} from "@testing-library/react";
import Header from "./screens/Header";


 

it("checkHomeButtonRender", () => {

 const { queryByTitle } = render(<Header />);

 const btn = queryByTitle("home");

 expect(btn).toBeTruthy();

});


 

it("checkDogsButtonRender", () => {

 const { queryByTitle } = render(<Header />);

 const btn = queryByTitle("dogs");

 expect(btn).toBeTruthy();

});


 

it("checkArticleButtonRender", () => {

 const { queryByTitle } = render(<Header />);

 const btn = queryByTitle("details");

 expect(btn).toBeTruthy();

});

it("checkwishlistButtonRender", () => {

    const { queryByTitle } = render(<Header />);
   
    const btn = queryByTitle("wishlist");
   
    expect(btn).toBeTruthy();
   
   });

   it("checkuserButtonRender", () => {

    const { queryByTitle } = render(<Header />);
   
    const btn = queryByTitle("user");
   
    expect(btn).toBeTruthy();
   
   });



it("checkLoginButtonRender", () => {

    const { queryByTitle } = render(<Header />);
   
    const btn = queryByTitle("login");
   
    expect(btn).toBeTruthy();
   
   });

   it("checkSignupButtonRender", () => {

    const { queryByTitle } = render(<Header />);

   
    const btn = queryByTitle("signup");
   
    expect(btn).toBeTruthy();
   
   });