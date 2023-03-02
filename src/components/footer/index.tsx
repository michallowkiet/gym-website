import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 justify-between gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel
            sequi? Ratione deserunt architecto aperiam perspiciatis vel iusto
            alias facilis.
          </p>
          <p>&copy; Evogym All Rights Reserved.</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem, ipsum dolor.</p>
          <p className="my-5">Lorem, ipsum dolor.</p>
          <p className="my-5">Lorem, ipsum dolor.</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <address className="my-5">
            <p>Poland, West Pomerania, Szczecin</p>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
