import Swal from "sweetalert2";

const useAlerts = () => {
  const messageAlert = (text) =>
    Swal.fire({
      title: "Congratulations",
      text: `${text}.`,
      icon: "success",
      confirmButtonColor: "blue",
    });

  const messageAlertError = (text) =>
    Swal.fire({
      title: "Error",
      text: `${text}.`,
      icon: "error",
      confirmButtonColor: "blue",
    });

  const messageBalance = (balance) =>
    Swal.fire({
      title: "Balance",
      text: `The smart contract has ${balance} ETH.`,
      icon: "success",
      confirmButtonColor: "blue",
    });

  const createNtfAlert = (method) => {
    Swal.fire({
      title: "NAME FOR YOUR NEW NTF",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCloseButton: true,
      confirmButtonText: "Create",
      showLoaderOnConfirm: true,
      confirmButtonColor: "blue",
      icon: "info",
      inputValidator: async (name) => {
        if (name) {
          await method(name);
        } else {
          Swal.fire({
            title: `Error in name NTF`,
            showCancelButton: false,
            icon: "error",
          });
        }
      },
    });
  };

  return {
    messageBalance,
    createNtfAlert,
    messageAlert,
    messageAlertError,
  };
};

export default useAlerts;
