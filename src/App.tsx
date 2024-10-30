import "./App.scss";
import { CustomTabProp } from "./customTabs/common/types";
import { CustomTabs } from "./customTabs";

function App() {
  const tabProps: CustomTabProp[] = [
    {
      key: "1",
      title: "Глаз",
      content: "Первый квадратик",
      disabled: true,
    },
    {
      key: "2",
      title: "Акт выпол. работ",
      content: "Второй квадратик",
    },
    {
      key: "3",
      title: "Счёт",
      content: "Третий квадратик",
    },
    {
      key: "4",
      title: "Наряд - заказ",
      content: "Четвертый квадратик",
    },
    {
      key: "5",
      title: "Лист осмотр",
      content: "Пятый квадратик",
    },
    {
      key: "6",
      title: "Админ. панель",
      content: "Шестый квадратик",
    },
  ];

  return (
    <>
      <CustomTabs tabs={tabProps} defaultKey="2" />
    </>
  );
}

export default App;
