function ThankYouForm() {
  return (
    <div className="flex flex-col justify-center items-center py-[4.94rem] pt-[4.31rem]">
      <img
        src="../public/images/icon-success.svg"
        className="block w-14 h-14 mb-6"
      />
      <h1 className="text-xl font-bold mb-[0.56rem]">Thank you!</h1>
      <p className="text-base leading-[1.56rem] text-gray-500">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default ThankYouForm;
