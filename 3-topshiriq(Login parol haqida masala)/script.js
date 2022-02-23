let login = prompt(
  "Loginni kiriting! (adminga kirish uchun admin so'zini user oynasiga kirish uchun user kalit so'zini kiriting)"
);
if (login === "admin") {
  let parol = prompt(
    "Admin oynasiga kirish uchun parolni kiriting   ( Parol sifatida admin sozini kirting)"
  );
  if (parol === "admin") {
    alert("Admin oynasiga xush kelibsiz!");
  } else alert("Parolni xato kiritdingiz");
} else if (login === "user") {
  let parol2 = prompt(
    "User oynaisga kirish uchun parolni kriting (Parol user kalit so'zi)"
  );
  if (parol2 === "user") {
    alert("User oynasiga xush kelibsiz!");
  } else alert("Parolni xato kiritdingiz!");
} else alert("Siz loginni xato kiritdingiz.Iltimos qayta urinib ko'ring!");
