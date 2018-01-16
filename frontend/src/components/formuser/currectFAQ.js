export default [
  {
    id: "1",
    category: "OP-1",
    question: "how do i charge my OP-1?",
    answer: "use any usb cable connected to a computer or standard usb phone or tablet charger.",
    comments: "",
    keywords: "OP-1"
  }, {
    id: "2",
    category: "OP-1",
    question: "how do i update the OP-1 firmware?",
    answer: `
      * turn OP-1 off.
      * disconnect the usb cable.
      * wait three seconds.
      * press and hold the COM key on the OP-1 while turning the power on. this will take you to the TE-BOOT screen.
      * press T1 or 1/IN on OP-1 to select upload firmware.
      * connect OP-1 to computer using the usb cable. OP-1 will appear as a removable disk on your computer.
      * copy the firmware file to the root of the removable disk.
      * eject the removable disk.
      * press the COM button on OP-1.

      note: if the OS revision number at OP-1 startup is same or greater than the currently available download version, then you should not update.

      the latest firmware can be found here:[teenage.engineering/downloads#os_updates]
      `,
    keywords: "OP-1"
  }, {
    id: "3",
    category: "OP-1",
    question: "how long does the battery last?",
    answer: "the battery will last 8-10 hours of constant use on a full charge. in standby mode the battery will last 16 hours.",
    comments: "",
    keywords: "OP-1"
  }, {
    id: "4",
    category: "OP-1",
    question: "how long does my warranty last?",
    answer: "we offer one year warranty on all of our products.",
    keywords: "OP-1"
  }

]
