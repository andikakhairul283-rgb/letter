const message = `Ciee yang udaa maw jadi maba UI hihi,\nicaaa semangaat teruss yaaa cantikk, yukk kita bantai bantai utbk sheess.\n\nabang sebenernyaa bingung mauu ngetik apaa huhu. pokoknya icaa semangat truss, dan hargai prosesnya okaayy?\n\nkalauu adekk ngerasa stuck atau lelah, jangan berhenti, ingatt ada abang disini okay? truss cerita sama abang yaa hihi\n\n kita semua bolee capee,\n kitaa boleh bgd ngeluh,\n tapi harus ingettt  \nkita gabole nyerah okay?\ni'll always support u.\n \nwith love, Andika.
`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);

}


