import {
  PhoneFilled,
  PushpinFilled,
  AndroidOutlined,
  AppleOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import ContainerLayout from "@/components/Layouts/ContainerLayout";

export default function Footer() {
  return (
    <footer className="text-center md:text-left py-0 bg-main text-dim mt-20 pt-14 w-full">
      <ContainerLayout container space="none">
        <div className="md:flex justify-between md:space-x-2 w-full [&>div>h4]:font-trebuchet [&>div>h4]:tracking-[4px] [&>div>h4]:text-white [&>div>h4]:uppercase [&>div>h4]:mb-7 [&>div]:mb-12 px-2">
          <div>
            <h4>Support</h4>
            <div className="flex flex-col items-center whitespace-nowrap space-y-4">
              {[
                [PhoneFilled, "12345", "10AM - 7PM", "tel:12345", 90],
                [PushpinFilled, "Find Our Stores", "Store Locator", "#"],
              ].map(([Icon, label, subLabel, link, rotate = 0], index) => (
                <a
                  key={index}
                  className="w-full max-w-xs flex items-center space-x-6 hover:text-inherit border border-white/10 hover:border hover:border-primary rounded-full py-2 px-8"
                  href={link}
                >
                  <div>
                    <Icon className="text-xl text-white" rotate={rotate} />
                  </div>
                  <div>
                    <p>{subLabel}</p>
                    <h5 className="text-primary text-lg font-semibold">
                      {label}
                    </h5>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4>About Us</h4>
            <ul className="flex flex-wrap justify-center [&>li]:pr-2 list-disc md:list-none md:grid grid-cols-2 xl:grid-cols-3 gap-5">
              {[
                ["EMI Terms", "#"],
                ["About Us", "#"],
                ["Online Delivery", "#"],
                ["Privacy Policy", "#"],
                ["Terms and Conditions", "#"],
                ["Refund and Return Policy", "#"],
                ["Blog", "#"],
                ["Contact Us", "#"],
                ["Brands", "#"],
                ["Online Service Support", "#", 1],
                ["Complain / Advice", "#", 1],
              ].map(([label, link, active = 0], index) => (
                <li key={index}>
                  <a
                    className={`hover:text-primary hover:underline ${
                      active && "text-primary"
                    }`}
                    href={link}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:max-w-xs [&>p]:leading-7">
            <h4>Stay Connected</h4>
            <p>
              <span className="text-white">Star Gadget Ltd</span>
              <br />
              Head Office: 27 Kazi Nazrul Islam Ave,Navana Zohura Square, Dhaka
              1000
            </p>
            <p>
              <span>Email:</span>
              <br />
              <a
                className="text-primary hover:text-primary hover:underline"
                href="mailto:shahariarrahman98@gmail.com"
              >
                webteam@stargadgetbd.com
              </a>
            </p>
          </div>
        </div>
        <div className="text-xs border-white/10 border-y-[1px] md:flex justify-between px-2">
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-5">
            <p className="py-3">Experience Star Gadget App on your mobile:</p>
            <div className="flex space-x-5">
              {[
                [AndroidOutlined, "Google Play", "#"],
                [AppleOutlined, "App Store", "#"],
              ].map(([Icon, label, link], index) => (
                <a
                  key={index}
                  className="flex space-x-3 border border-white/50 hover:border-white/80 pr-[10px] pl-[6px] pt-[2px] pb-[4px] leading-3 rounded-md hover:text-inherit"
                  href={link}
                  title="Star Gadget Android APP"
                >
                  <Icon className="text-2xl text-white" />
                  <div>
                    <small>Download on</small>
                    <p className="text-sm text-white">{label}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2 py-6 md:p-3">
            {[
              [FacebookOutlined, "Facebook", "#"],
              [YoutubeFilled, "Youtube", "#"],
              [InstagramOutlined, "Instagram", "#"],
            ].map(([Icon, label, link], index) => (
              <a
                key={index}
                className="cursor-default bg-white/10 hover:bg-secondary p-[10px] rounded-full"
                href={link}
                title={label}
              >
                <Icon className="text-2xl text-white" />
              </a>
            ))}
          </div>
        </div>
        <div className="px-2 text-xs md:flex bg-black/30 md:bg-inherit pt-7 pb-24 lg:pb-7 justify-between">
          <p>
            © {new Date().getFullYear()} Star Gadget Ltd | All rights reserved
          </p>
          <p>Developed by: Md Shahariar Rahman</p>
        </div>
      </ContainerLayout>
    </footer>
  );
}
