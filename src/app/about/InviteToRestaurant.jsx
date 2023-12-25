import { Center } from "../Components/SmallComponents/Center";

export default function InviteToRestaurant() {
  return (
    <>
      <div className="InviteToRestaurant w-full py-10 flex items-center justify-center flex-col text-center">
        <Center
          heading={` We Invite You to Visit Our Restaurant`}
          para={
            " Assumenda possimus eaque illo iste, autem. Porro eveniet, autem ipsam vitae amet repellat repudiandae tenetur, quod corrupti consectetur cum? Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae repudiandae dolorem, beatae dolorum, praesentium itaque et quamquaerat. Cumque, consequatur! Tempore aspernatur quae repudiandae dolorem, beatae dolorum, praesentium itaque et quam quaerat. Cumque, consequatur!"
          }
        />
        <div className="flex flex-wrap items-center justify-center gap-16 mt-10">
          <div>
            <img
              src="/InviteToRestaurant-icon1.png"
              alt=""
              className="InviteToRestaurant-icon1 w-[100px] hover:text-[#1A2F33]"
            />
            <span className="HTFG">HTFG 2020</span>
          </div>
          <div>
            <img
              src="/InviteToRestaurant-icon2.png"
              alt=""
              className="InviteToRestaurant-icon2 w-[100px] hover:text-[#1A2F33]"
            />
            <span className="HTF">HTF 2018</span>
          </div>
          <div>
            <img
              src="/InviteToRestaurant-icon3.png"
              alt=""
              className="InviteToRestaurant-icon3 w-[100px] hover:text-[#1A2F33]"
            />
            <span className="GFA">GFA 2019</span>
          </div>
          <div>
            <img
              src="/InviteToRestaurant-icon4.png"
              alt=""
              className="InviteToRestaurant-icon4 w-[100px] hover:text-[#1A2F33]"
            />
            <span className="LUS">LUA 2021</span>
          </div>
        </div>
      </div>
    </>
  );
}
