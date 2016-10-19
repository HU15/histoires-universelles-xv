(TeX-add-style-hook
 "fr328_incipit"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-class-options
                     '(("standalone" "12pt" "varwidth")))
   (TeX-run-style-hooks
    "latex2e"
    "standalone"
    "standalone12"
    "fontspec"))
 :latex)

