"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Instagram, MessageCircle, Phone, Shield, Music2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const faq = [
  ["Як ви вносите посвідчення в Дію?", "Наш юрист подає офіційний запит до МВС з проханням провести верифікацію посвідчення водія. Після оновлення інформації посвідчення з’являється в Дії або оновлюється до нового зразка."],
  ["Це офіційна процедура?", "Так. Посвідчення замовляється через державний застосунок «Дія» або Кабінет водія. Ми надаємо організаційний супровід та допомагаємо з доставкою документів у Європу."],
  ["Як я можу перевірити результат?", "Перед фінальним етапом посвідчення оновлюється в Дії. Клієнт може самостійно перевірити інформацію у застосунку."],
  ["Чи можу я відновити посвідчення після обміну на європейське?", "Ні. Якщо Україна отримала інформацію про офіційний обмін посвідчення на європейське, дистанційне відновлення неможливе."],
  ["Що робити, якщо я не можу авторизуватись у Дії?", "Наш менеджер допоможе пройти авторизацію через банк або документи та підкаже, як правильно налаштувати Дію."],
];

export default function Page() {
  const [secondsLeft, setSecondsLeft] = useState(7200);
  const [open, setOpen] = useState<number | null>(0);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<{name?: string; phone?: string}>({});

  useEffect(() => { if (secondsLeft > 0) { const t = setInterval(() => setSecondsLeft((s) => s - 1), 1000); return () => clearInterval(t);} }, [secondsLeft]);
  const time = useMemo(() => {
    const h = String(Math.floor(secondsLeft / 3600)).padStart(2, "0");
    const m = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, "0");
    const s = String(secondsLeft % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  }, [secondsLeft]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const nErr: typeof err = {};
    if (!name) nErr.name = "Вкажіть ім’я";
    if (!phone) nErr.phone = "Вкажіть номер або месенджер";
    setErr(nErr);
    if (Object.keys(nErr).length) return;
    setDone(true);
    e.currentTarget.reset();
  };

  return <main>
    <section className="relative overflow-hidden bg-mesh text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.15),transparent_45%)]" />
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-14">
        <header className="flex items-center justify-between mb-12"><div className="text-2xl font-bold">DocExpert</div><div className="text-right">+380 96 392 54 81<br/>Віталій</div></header>
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-4xl md:text-6xl font-semibold max-w-3xl">Відновлення посвідчення водія дистанційно</motion.h1>
        <p className="mt-4 text-xl">Для українців за кордоном</p>
        <p className="mt-4 max-w-2xl text-slate-200">Допомагаємо внести посвідчення в Дію, перевипустити пластикове посвідчення та виправити помилки в базі МВС без необхідності приїжджати в Україну.</p>
        <div className="grid md:grid-cols-4 gap-3 mt-8">{["Офіційна процедура","Робота через державні реєстри","Супровід клієнтів по Європі","Договір про надання послуг"].map(t=><div key={t} className="glass rounded-xl px-4 py-3 text-sm">{t}</div>)}</div>
        <div className="flex flex-wrap gap-3 mt-8"><a className="px-6 py-3 rounded-xl bg-violet-500">Написати у Viber</a><a className="px-6 py-3 rounded-xl bg-green-500">Написати у WhatsApp</a><a href="#form" className="px-6 py-3 rounded-xl border border-white/50">Отримати консультацію</a></div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 -mt-10 relative z-10"><div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-900 text-white p-6 shadow-glow"><div className="flex flex-wrap items-center justify-between gap-4"><div><p className="inline-flex items-center gap-2 text-sm bg-white/15 px-3 py-1 rounded-full">Лише 10 місць</p><h2 className="text-2xl font-semibold mt-2">Безкоштовна перевірка ситуації для перших 10 заявок</h2><p className="text-slate-200 mt-2">Залиште заявку сьогодні — ми безкоштовно перевіримо вашу ситуацію та підкажемо, чи можливо відновити або перевипустити посвідчення дистанційно.</p></div><div className="text-right"><div className="text-4xl font-semibold">{time}</div><button onClick={()=>document.getElementById("form")?.scrollIntoView({behavior:"smooth"})} className="mt-3 bg-white text-blue-900 px-5 py-2 rounded-lg">Залишити заявку</button></div></div><p className="text-xs mt-3 text-slate-200">{secondsLeft>0?"Кількість безкоштовних перевірок обмежена через індивідуальний аналіз кожної ситуації.":"Залиште заявку — менеджер перевірить доступність консультації"}</p></div></section>

    <section className="mx-auto max-w-6xl px-4 py-14 space-y-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div><h3 className="text-3xl font-semibold mb-4">З якими ситуаціями ми допомагаємо</h3><div className="grid sm:grid-cols-2 gap-3">{["Втрачене посвідчення водія","Посвідчення не відображається в Дії","Помилки у базі МВС","Старий зразок посвідчення","Відсутність посвідчення в реєстрі","Відсутність фото в Дії","Відмова при замовленні посвідчення через Дію","Допомога для українців за кордоном"].map(i=><motion.div whileHover={{y:-4}} key={i} className="rounded-xl border p-4 bg-white"><Shield className="text-indigo-500 mb-2"/>{i}</motion.div>)}</div></div>
        <div><h3 className="text-3xl font-semibold mb-4">Вартість та терміни</h3><div className="grid gap-4">{[["Верифікація посвідчення", "200€", ["Оновлення інформації в державних реєстрах","Внесення посвідчення в Дію","Термін виконання: до 1 місяця"]],["Перевипуск пластикового посвідчення","300€",["Замовлення нового посвідчення","Отримання документів в Україні","Доставка в Європу","Термін виконання: до 3-х тижнів"]]].map(([t,p,arr])=><div key={String(t)} className="rounded-2xl border-2 border-indigo-100 bg-white p-6"><p className="font-semibold">{String(t)}</p><p className="text-4xl font-bold my-2">{String(p)}</p><ul className="space-y-2 text-sm">{(arr as string[]).map(x=><li key={x} className="flex gap-2"><CheckCircle2 className="w-4 text-indigo-500"/>{x}</li>)}</ul></div>)}</div><p className="text-sm mt-2">Кожна ситуація попередньо аналізується індивідуально.</p></div>
      </div>

      <div className="rounded-2xl bg-white p-6 border"><h3 className="text-2xl font-semibold mb-5">Як проходить процедура</h3><div className="grid md:grid-cols-6 gap-3">{["Перевірка документів та ситуації клієнта","Верифікація посвідчення через державні реєстри","Оновлення посвідчення в Дії","Замовлення нового пластикового посвідчення","Отримання документів в Україні","Доставка документів клієнту за кордон"].map((x,i)=><div key={x} className="text-sm"><div className="w-8 h-8 rounded-full bg-indigo-500 text-white grid place-content-center mb-2">{i+1}</div>{x}</div>)}</div></div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-2xl bg-white p-6 border"><h4 className="text-xl font-semibold mb-3">Необхідні документи</h4><ul className="space-y-2">{["Фото посвідчення водія","Закордонний паспорт","Внутрішній паспорт / ID-карта","ІПН","Прописка","Додаткові документи за потреби"].map(x=><li key={x}>• {x}</li>)}</ul></div>
        <div className="rounded-2xl bg-white p-6 border"><h4 className="text-xl font-semibold mb-3">Важливі нюанси</h4><ul className="space-y-2 text-sm">{["Посвідчення до 2014 року часто відсутні в електронному реєстрі","Дія може не підтягувати посвідчення автоматично","Помилки у базі МВС можуть блокувати процедуру","Іноді відсутня цифрова фотографія","Посвідчення з окупованих територій можуть вимагати додаткової перевірки","Для деяких процедур необхідна попередня верифікація посвідчення"].map(x=><li key={x}>• {x}</li>)}</ul></div>
        <div className="rounded-2xl bg-red-50 p-6 border border-red-200"><h4 className="text-xl font-semibold mb-3 text-red-700">У яких випадках ми НЕ допомагаємо</h4><ul className="space-y-2 text-sm">{["Виготовлення посвідчення “з нуля”","Додавання нових категорій","Відновлення після ст.130 КУпАП","Підроблені документи","Процедури, які вимагають складання іспитів в Україні"].map(x=><li key={x}>• {x}</li>)}</ul><AlertTriangle className="mt-4 text-red-600"/></div>
      </div>

      <div className="rounded-2xl bg-white p-6 border"><h4 className="text-xl font-semibold mb-3">Умови співпраці та оплата</h4><ul className="grid md:grid-cols-2 gap-2 text-sm">{["Попередня перевірка документів","Договір про надання послуг","Часткова передплата на фірмовий рахунок компанії","Фото та підтвердження результату","Посвідчення оновлюється в Дії перед фінальним етапом","Фінальна оплата перед відправкою документів","Можливість особистого отримання документів у Польщі або Чехії"].map(x=><li key={x}>• {x}</li>)}</ul></div>

      <div><h3 className="text-3xl font-semibold mb-4">Часті запитання</h3><div className="space-y-3">{faq.map(([q,a],i)=><div className="border bg-white rounded-xl" key={q}><button onClick={()=>setOpen(open===i?null:i)} className="w-full text-left px-5 py-4 font-medium">{q}</button><motion.div initial={false} animate={{height:open===i?"auto":0,opacity:open===i?1:0}} className="overflow-hidden"><p className="px-5 pb-4 text-slate-600">{a}</p></motion.div></div>)}</div></div>

      <section id="form" className="rounded-2xl bg-gradient-to-r from-slate-900 to-blue-950 text-white p-8">
        <h3 className="text-3xl font-semibold">Потрібна перевірка вашої ситуації?</h3><p className="mt-2 text-slate-300">Перед початком роботи ми перевіримо документи та підкажемо, чи можливо відновити або перевипустити посвідчення дистанційно.</p>
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4 mt-6">
          <div><label>Ім’я * <span className="text-xs text-slate-400">Обов’язкове поле</span></label><input name="name" className={`mt-1 w-full rounded-lg bg-white/10 border p-3 ${err.name?"border-red-400":"border-white/30"}`}/>{err.name && <p className="text-xs text-red-300">{err.name}</p>}</div>
          <div><label>Номер телефону / месенджер * <span className="text-xs text-slate-400">Обов’язкове поле</span></label><input name="phone" className={`mt-1 w-full rounded-lg bg-white/10 border p-3 ${err.phone?"border-red-400":"border-white/30"}`}/>{err.phone && <p className="text-xs text-red-300">{err.phone}</p>}</div>
          <input name="country" placeholder="Країна перебування (необов’язково)" className="rounded-lg bg-white/10 border border-white/30 p-3"/>
          <input name="year" placeholder="Рік видачі посвідчення (необов’язково)" className="rounded-lg bg-white/10 border border-white/30 p-3"/>
          <textarea name="problem" placeholder="Опишіть проблему (необов’язково)" className="md:col-span-2 rounded-lg bg-white/10 border border-white/30 p-3" rows={4}/>
          <button className="md:col-span-2 bg-green-500 hover:bg-green-400 transition rounded-xl px-5 py-3 font-semibold">Отримати консультацію</button>
          {done && <p className="md:col-span-2 text-green-300">Дякуємо, ми зв’яжемося з вами найближчим часом.</p>}
        </form>
      </section>

      <footer className="pb-10"><div className="grid md:grid-cols-3 gap-4 items-center"><div><p className="font-semibold">Про нас</p><p className="text-sm">Спеціалізуємось на дистанційному супроводі процедур, пов’язаних з посвідченнями водія для українців за кордоном.</p><a className="underline mt-2 inline-block" href="https://www.instagram.com/pro_docs_poland?igsh=MTduMWt4bjdiNXg1dg==" target="_blank">Переглянути наші соцмережі</a></div><div className="flex gap-3"><a target="_blank" href="https://www.tiktok.com/@documentexxpert?_r=1&_t=ZS-96SubZK4WdY" className="p-3 rounded-full bg-black text-white"><Music2/></a><a target="_blank" href="https://www.instagram.com/pro_docs_poland?igsh=MTduMWt4bjdiNXg1dg==" className="p-3 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400 text-white"><Instagram/></a></div><div className="text-right">+380963925481<br/>Віталій<br/>Viber / WhatsApp</div></div></footer>
    </section>

    <div className="fixed bottom-4 right-4 flex flex-col gap-3"><a className="w-12 h-12 rounded-full bg-green-500 text-white grid place-content-center"><MessageCircle/></a><a className="w-12 h-12 rounded-full bg-violet-500 text-white grid place-content-center"><Phone/></a></div>
  </main>;
}
