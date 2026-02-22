const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">Nepal,Kapilvastu</p>
        <p className="my-4">
          <a href="tel:91232039239" className="border-b">
            912-320-392-39
          </a>
        </p>
        <a
          href="mailto:p91sandhya@gmail.com?subject=2 Minute Metting Inquiry&body=Hi, I saw your portfiolio."
          className="border-b"
        >
          p91sandhya@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
