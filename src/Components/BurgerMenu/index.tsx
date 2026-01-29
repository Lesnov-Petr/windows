import React, { useState, useEffect } from "react";
import { ReactComponent as CloseSvg } from "../../assets/images/close.svg";
import {
  SBurgerMenu,
  SBurgerIcon,
  SMenuOverlay,
  SMenuContent,
  SButtonClose,
  SList,
  SLink,
  SAuthMenu,
} from "./styles";
import { LogoFirst } from "../Logo";

interface BurgerMenuProps {
  children: React.ReactNode;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const listNenu = [
    { link: "/about", label: "О компании" },
    { link: "/uslugi", label: "Услуги" },
    { link: "/clients", label: "Клиентам" },
  ];

  // Закрытие меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest(".burgerMenu")) setIsOpen(false);
      if (target.closest(".auth__icon")) {
        setTimeout(() => {
          setIsOpen(false);
        }, 250);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <SBurgerMenu>
      <SBurgerIcon onClick={() => setIsOpen(true)} aria-label="Открыть меню">
        <span />
        <span />
        <span />
      </SBurgerIcon>
      {/* Оверлей (затемнение фона) */}
      {isOpen && <SMenuOverlay onClick={() => setIsOpen(false)} />}
      <SMenuContent $isOpen={isOpen}>
        <>
          <LogoFirst />
          <SAuthMenu> {children}</SAuthMenu>
          <SButtonClose onClick={() => setIsOpen(false)}>
            <CloseSvg />
          </SButtonClose>
          <nav>
            <SList>
              {listNenu.map((item) => (
                <SLink to={item.link} onClick={() => setIsOpen(false)}>
                  {item.label}
                </SLink>
              ))}
            </SList>
          </nav>
        </>
      </SMenuContent>
    </SBurgerMenu>
  );
};
