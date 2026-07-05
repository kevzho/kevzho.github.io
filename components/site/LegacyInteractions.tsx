"use client";

import { useEffect } from "react";

export function LegacyInteractions() {
  useEffect(() => {
    const clickableCards = document.querySelectorAll<HTMLElement>("[data-href].card, [data-href].mini-card");

    clickableCards.forEach((card) => {
      if (card.dataset.cardReady === "true") return;
      card.dataset.cardReady = "true";
      card.setAttribute("role", "link");
      card.setAttribute("tabindex", "0");

      const navigate = () => {
        const href = card.getAttribute("data-href");
        if (!href) return;

        if (card.getAttribute("data-target") === "_blank") {
          window.open(href, "_blank", "noopener,noreferrer");
        } else {
          window.location.href = href;
        }
      };

      card.addEventListener("click", (event) => {
        if ((event.target as Element).closest("a, button")) return;
        navigate();
      });

      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          navigate();
        }
      });
    });
  }, []);

  return null;
}
