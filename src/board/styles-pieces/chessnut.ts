const chessnut = {
  kw: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIHdpZHRoPSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQwNS4zIDcwMGMtNTkuOCAwLTExNi4xLTUuMy0xNTguNy0xNC44LTQ3LjQtMTAuNi03MS4xLTI0LjYtNzIuMS00Mi44TDE1OC4xIDU3NnYtMS4xYzAtOS4xIDUuMi0xOCAxNS4yLTI2LjUtNi4yLTIxLjktMjEuNi00NS41LTM2LjYtNjguNC0xOC40LTI4LTM1LjctNTQuNC0zNS43LTc3LjcgMC0yNS41IDE4LjQtNDEuNCA0Ny44LTQxLjRoMS4zYzIuMiAwIDQuNS4xIDcgLjEgNiAuMSAxMi45LjIgMTkuMy4yLTUuNC0yNi43LTMuOC00NS45IDUtNTkuOSAxMy4zLTIxLjUgMzYuOS0yNCA1My42LTI0IDE0LjEgMCAyOS44IDIuMSA0Ni40IDQuNCAxLjgtMTYuMyA3LjUtMjguNSAxNy4yLTM2LjkgNy44LTYuOCAxNy0xMC4zIDI3LTEwLjMgMjEuMyAwIDQyLjIgMTQuOSA2MC44IDI4IDcgNSAxMy42IDkuNyAxOSAxMi41IDUuNC0yLjkgMTIuMS03LjYgMTktMTIuNSAxOC41LTEzLjEgMzkuNS0yOCA2MC43LTI4IDEwLjIgMCAxOS4yIDMuNSAyNyAxMC4zIDkuNiA4LjQgMTUuMyAyMC41IDE3LjEgMzYuOSAxNi42LTIuMyAzMi4zLTQuNCA0Ni40LTQuNCAxNi42IDAgNDAuMyAyLjUgNTMuNiAyNCA4LjYgMTQgMTAuMyAzMy4zIDQuOSA2MCA2LjYgMCAxMy42LS4xIDE5LjgtLjIgMi4zIDAgNC40LS4xIDYuNS0uMWgxLjNjMjkuNSAwIDQ3LjEgMTUuNCA0Ny4xIDQxLjQgMCAyMy4yLTE3LjYgNDkuNy0zNi4zIDc3LjctMTUuMiAyMi44LTMwLjggNDYuMy0zNyA2OC4xIDEwLjcgOC4yIDE2LjEgMTcuMyAxNi4xIDI2Ljh2MS4xbC0xNS44IDY3LjJjLTEuNiAxNy45LTI1LjUgMzEuOS03Mi44IDQyLjMtNDIuMyA5LjItOTguNCAxNC40LTE1Ny43IDE0LjR6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTMyNS42IDI0My44YzI4LjIgMCA2MC40IDMzLjYgNzkuOCA0MS41IDE5LjQtOCA1MS42LTQxLjUgNzkuOC00MS41IDcuMyAwIDE0LjUgMi4zIDIxLjEgOCAxMC4yIDguOSAxNC4zIDIyLjkgMTQuNiA0MC40IDIwLTIuOCAzOC44LTUuNyA1NS01LjcgMjAuMiAwIDM2LjQgNC41IDQ1LjggMTkuN3M3LjkgMzggMS4yIDY0LjNjMi41IDAgNS4xLjEgNy44LjEgMTAuMyAwIDIxLjctLjIgMzAuMS0uM2gxLjJjMjEuNCAwIDM3LjkgOS4yIDM3LjkgMzIuMiAwIDM5LjEtNjAuOSA5NS43LTczLjkgMTQ2Ljd2My4zYzEwLjggNi45IDE2LjUgMTQuNSAxNi41IDIyLjVsLTE1LjYgNjYuOWMtMS4zIDI3LjItMTAwIDQ5LjEtMjIxLjUgNDkuMS0xMjIuMyAwLTIyMS41LTIyLjItMjIxLjUtNDkuN0wxNjcuNiA1NzVjMC03LjkgNS44LTE1LjYgMTUuNi0yMi41di0zLjZjLTExLjktNTEtNzIuOC0xMDcuNi03Mi44LTE0Ni43IDAtMjMgMTcuMy0zMi4yIDM4LjctMzIuMmgxLjJjOC41LjEgMjAuMy40IDMwLjYuNCAyLjYgMCA1LjEgMCA3LjUtLjEtNi43LTI2LjQtOC4xLTQ5LjEgMS4zLTY0LjMgOS40LTE1LjEgMjUuNS0xOS43IDQ1LjgtMTkuNyAxNi4yIDAgMzUgMi45IDU1IDUuNy4zLTE3LjUgNC40LTMxLjYgMTQuNi00MC40IDYtNS41IDEzLjEtNy44IDIwLjUtNy44bTAtMTguM2MtMTIuNCAwLTIzLjUgNC4yLTMzIDEyLjUtOS40IDguMS0xNS42IDE5LjMtMTguNyAzMy41LTEzLjctMS44LTI2LjctMy4yLTM4LjktMy4yLTEzLjMgMC0yNC4zIDEuNy0zMy43IDUuNC0xMS45IDQuNi0yMS4yIDEyLjMtMjcuOCAyMi45LTguNiAxNC0xMS4zIDMyLTguMSA1NS41LTIuOCAwLTUuNi0uMS04LjItLjEtMi41IDAtNC45LS4xLTctLjFoLTEuNGMtMTUuMiAwLTI4LjUgMy44LTM4LjIgMTEtOC41IDYuNC0xOC44IDE4LjQtMTguOCAzOS40IDAgMjYgMTguMSA1My42IDM3LjMgODIuNyAxMy40IDIwLjQgMjcuMyA0MS40IDM0IDYwLjUtOS4yIDkuMi0xMy42IDE5LTEzLjYgMjkuNHYyLjNsLjMgMi4yIDE1LjggNjQuNmMxLjEgMTIuOSAxMC4yIDI0IDI3IDMyLjggMTIuNiA2LjcgMzAuMSAxMi41IDUyLjEgMTcuNSA0My4xIDkuNiAxMDAuMiAxNSAxNjAuNiAxNSA2MCAwIDExNi43LTUuMyAxNTkuNy0xNC44IDIxLjgtNC45IDM5LjQtMTAuNyA1Mi4xLTE3LjMgMTctOC45IDI2LjQtMTkuOCAyNy44LTMyLjVsMTUuMS02NS42LjMtMi4xdi0yLjJjMC0xMC44LTQuOC0yMC43LTE0LjQtMjkuOCA2LjgtMTkgMjAuNy0zOS45IDM0LjItNjAgMTkuNC0yOS4yIDM3LjgtNTYuNyAzNy44LTgyLjcgMC0yMS4xLTkuOC0zMy0xOC4xLTM5LjMtOS44LTcuNS0yMi42LTExLjItMzgtMTEuMmgtMS40Yy0yLjEgMC00LjIuMS02LjUuMS0yLjggMC01LjcuMS04LjcuMSAzLjMtMjMuNS42LTQxLjYtOC01NS41LTYuNi0xMC42LTE1LjktMTguMy0yNy44LTIyLjktOS4zLTMuNy0yMC4zLTUuNC0zMy42LTUuNC0xMi4yIDAtMjUuMiAxLjQtMzguOSAzLjItMy4xLTE0LjEtOS4zLTI1LjQtMTguNy0zMy41LTkuNS04LjMtMjAuNi0xMi41LTMzLTEyLjUtMjQuMiAwLTQ3LjQgMTYuNC02Ni4xIDI5LjctNC44IDMuMy05LjYgNi44LTEzLjcgOS40LTQuMS0yLjYtOS02LTEzLjctOS40LTE4LjctMTMuMi00MS45LTI5LjYtNjYuMS0yOS42eiIvPjxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48ZyBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxnIHN0cm9rZS13aWR0aD0iMTguMzYiPjxwYXRoIGQ9Ik0xODcuNCAzNzAuNGMtMTEuOS4zLTI1LjktLjEtMzcuNS0uMy0yMS45LS4zLTM5LjQgOC43LTM5LjQgMzIuMiAwIDM5LjEgNjAuNiA5NS43IDczLjMgMTQ2LjciLz48cGF0aCBkPSJNMjg5LjUgMjkyLjRjLTQ1LjYtNi4zLTgzLjMtMTMuOC0xMDAuMyAxMy43LTI3IDQzLjYgMzUuNiAxNTAuNyA1NS4xIDIyMi40Ii8+PHBhdGggZD0iTTQwNC4zIDI4NS43Yy0yNC4zLTktNjcuOS02MS43LTk5LjgtMzMuOS00My42IDM3LjkgMjIuOSAxNzMuOSAzOC4xIDI2MC41bTI4MC43LTE0MS45YzExLjkuMyAyNS45LS4xIDM3LjUtLjMgMjEuOS0uMyAzOS40IDguNyAzOS40IDMyLjIgMCAzOS4xLTYwLjYgOTUuNy03My4zIDE0Ni43Ii8+PHBhdGggZD0iTTUyMS4zIDI5Mi40YzQ1LjYtNi4zIDgzLjMtMTMuOCAxMDAuMyAxMy43IDI3IDQzLjYtMzUuNiAxNTAuNy01NS4xIDIyMi40Ii8+PHBhdGggZD0iTTQwNi41IDI4NS43YzI0LjMtOSA2Ny45LTYxLjcgOTkuOC0zMy45IDQzLjYgMzcuOS0yMi45IDE3My45LTM4LjEgMjYwLjUiLz48L2c+PHBhdGggZD0iTTQwNS40IDI3MS43djE4NC41IiBzdHJva2Utd2lkdGg9IjE1LjEyIi8+PC9nPjxwYXRoIGQ9Ik02MzIuOSA1NTIuNWwyNy44LTY4LjhjLTExLjEgMTQuNi0yNC44IDE2LjgtMzMuOSAxNC4zLTI3LTgtMjYuNS00MC42LTI0LjQtNjYuNS0xNi40IDI5LjUtMzkuMyA0NC43LTYzLjkgMzkuNS0yNC45LTUuMy00MC00MC41LTM5LTY4LjYtMTcuNSAzNS42LTQ5LjQgNTQuMS05NC4xIDU0LjFzLTc2LjYtMTguNS05NC4xLTU0LjFjMS4xIDI4LjEtMTQgNjMuMy0zOSA2OC42LTI0LjYgNS4yLTQ3LjQtMTAtNjMuOS0zOS41IDEuOSAyNS45IDIuNiA1OC41LTI0LjQgNjYuNS05LjEgMi43LTIyLjkuMy0zMy45LTE0LjNsMjcuOCA2OC44IiBmaWxsPSIjZmZmIiBzdHJva2Utd2lkdGg9IjE4LjM2Ii8+PGcgZmlsbD0ibm9uZSI+PGcgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIxLjYiPjxwYXRoIGQ9Ik0xNjcuOSA1NzQuOGMwLTM0LjMgMTA2LjMtNjEuNyAyMzcuNC02MS43czIzNy40IDI3LjMgMjM3LjQgNjEuN20tNDc1IDEuOWwxNi4yIDY1bTQ1OS4yLTY1bC0xNi4yIDY1Ii8+PGVsbGlwc2UgY3g9IjQwNS40IiBjeT0iNjQxLjEiIHJ4PSIyMjEuNCIgcnk9IjQ5LjciLz48L2c+PHBhdGggZD0iTTQwNC4zIDk0LjZ2MTg5bS02MS41LTEyNC4ySDQ2OCIgc3Ryb2tlLXdpZHRoPSIzMC4yNCIvPjwvZz48L2c+PC9zdmc+",
  qw: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIHdpZHRoPSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik00MDEuMSA3MDQuNGMtNjIgMC0xMjAuNS01LjUtMTY0LjgtMTUuNC00OS42LTExLjEtNzQuMS0yNS44LTc1LTQ0LjdsLTEwLjItNTR2LS45YzAtNS40IDEuNi0xMy4yIDguNi0yMS40LTgtNDYuNS0yNS45LTEyNS4yLTQ0LjYtMTk1LjUtMTguNC02LjktMzAuOC0yNC41LTMwLjgtNDQuNiAwLTI2LjQgMjEuNC00Ny43IDQ3LjctNDcuN3M0Ny43IDIxLjQgNDcuNyA0Ny43YzAgMTEuMS0zLjcgMjEuNS0xMC42IDI5LjlDMTkwLjIgNDI0LjkgMjE2IDQ5NC41IDIzNCA1MzNsNS4zLTEuM2MtLjUtNTUuMy05LjEtMTY0LjMtMjAuNi0yNjEuNi0xOC42LTgtMzEtMjYuNi0zMS00Ny4xIDAtMjguMyAyMy01MS4zIDUxLjMtNTEuM3M1MS4zIDIzIDUxLjMgNTEuM2MwIDEzLjgtNS40IDI2LjctMTUgMzYuMyAxNy45IDkzLjUgNDcuNyAyMTEuNiA2NS4zIDI1OC45bDUuNC0uM2M4LjYtNjYgMTkuNC0xODQuNSAyNC42LTI5NC41LTE0LjktMTAtMjMuOC0yNi42LTIzLjgtNDQuNiAwLTI5LjggMjQuMi01NCA1NC01NHM1NCAyNC4yIDU0IDU0YzAgMTgtOC45IDM0LjYtMjMuNSA0NC42IDUuMiAxMTAuMSAxNiAyMjguNSAyNC42IDI5NC41bDUuNC4zYzE3LjYtNDcuMyA0Ny40LTE2NS4zIDY1LjMtMjU4LjktOS42LTkuNi0xNS0yMi41LTE1LTM2LjMgMC0yOC4zIDIzLTUxLjMgNTEuMy01MS4zczUxLjMgMjMgNTEuMyA1MS4zYzAgMjAuNi0xMi40IDM5LjEtMzEgNDcuMS0xMS42IDk3LjMtMjAuMiAyMDYuMy0yMC42IDI2MS42bDUuMyAxLjNjMTgtMzguNCA0My44LTEwOC4xIDY0LjktMTc1LjItNi45LTguNC0xMC42LTE4LjktMTAuNi0yOS45IDAtMjYuNCAyMS40LTQ3LjcgNDcuNy00Ny43czQ3LjcgMjEuNCA0Ny43IDQ3LjdjMCAyMC4xLTEyLjQgMzcuNy0zMC44IDQ0LjYtMTguNyA3MC4zLTM2LjUgMTQ4LjktNDQuNiAxOTUuNSA1LjcgNi43IDguNiAxMy44IDguNiAyMS4zdi45bC0xMC4zIDU0LjNjLTEuMiAxOC45LTI1LjcgMzMuNS03NSA0NC42LTQzLjggOS44LTEwMi4zIDE1LjMtMTY0LjQgMTUuM3ptLTE4OS40LTkwLjdjMS40IDMgMTMuNyAxMi40IDU0LjYgMjAuMyAzNi41IDcgODQuMiAxMSAxMzQuNiAxMSA1MC4zIDAgOTguMi0zLjkgMTM0LjYtMTEgNDAuOS04IDUzLjQtMTcuMyA1NC42LTIwLjMtMS40LTMtMTMuNy0xMi40LTU0LjYtMjAuMy0zNi41LTctODQuMi0xMS0xMzQuNi0xMS01MC4zIDAtOTguMiAzLjktMTM0LjYgMTEtNDAuOCA3LjktNTMuMSAxNy4zLTU0LjYgMjAuM3oiIHN0cm9rZS13aWR0aD0iMjAuNTIiLz48cGF0aCBkPSJNNTkyLjkgNjA3LjZjLTQxLjggMTMuOC0xMTIuMyAyMy4yLTE5MS44IDIzLjItODAuNCAwLTE0OC45LTkuNS0xOTAuNi0yMy41QzE5NyA2MTAuOCAxNzEgNjI4LjQgMTcxIDY0M2MwIDI4LjUgMTAzIDUxLjYgMjMwIDUxLjZzMjMwLTIzLjEgMjMwLTUxLjZjLjEtMTQuMi0yNC40LTMxLjctMzguMS0zNS40eiIgc3Ryb2tlLXdpZHRoPSIxNi4yIi8+PHBhdGggZD0iTTQwMS4xIDU5MS40YzEyNy4xIDAgMjMwLjEgMjMuMSAyMzAuMSA1MS42bDEwLjItNjAuM2MwLTYuMy0zLjItMTIuMy05LjQtMTguMSA3LjUtNDQuOSAyNi4xLTEyMS45IDQ3LTE5OS45IDE2LjYtNCAyOS4xLTE5IDI5LjEtMzYuOSAwLTIxLTE3LTM4LTM4LTM4LTIxLjEgMC0zOCAxNy0zOCAzOCAwIDEwLjggNC41IDIwLjYgMTEuOCAyNy41LTIwLjggNjctNTAuMSAxNDEuNC03MC40IDE4Mi40bC0yMC40LTQuOWMtLjMtNTQuMiA5LjItMTY3LjggMjEuNS0yNjkuOSAxNy40LTUgMzAuMi0yMSAzMC4yLTQwIDAtMjMtMTguNi00MS42LTQxLjYtNDEuNlM1MjEuNSAyMDAgNTIxLjUgMjIzYzAgMTMuMyA2LjMgMjUuMSAxNS45IDMyLjctMTggOTUuOC01MS4yIDIyMS40LTY5LjQgMjY2LjFsLTIwLjQtMS4zYy05LjEtNjYuNS0yMC44LTE4OC42LTI2LTMwMi42IDE0LjEtNy41IDIzLjgtMjIuMSAyMy44LTM5LjIgMC0yNC40LTE5LjktNDQuMy00NC4zLTQ0LjNzLTQ0LjMgMTkuOS00NC4zIDQ0LjNjMCAxNy4xIDkuNiAzMS45IDIzLjggMzkuMi01LjEgMTE0LTE2LjggMjM2LjEtMjYgMzAyLjZsLTIwLjQgMS4zYy0xOC4xLTQ0LjctNTEuNC0xNzAuMy02OS40LTI2Ni4xIDkuNy03LjYgMTUuOS0xOS40IDE1LjktMzIuNyAwLTIzLTE4LjYtNDEuNi00MS42LTQxLjZTMTk3LjMgMjAwIDE5Ny4zIDIyM2MwIDE5IDEyLjcgMzUgMzAuMiA0MCAxMi4zIDEwMiAyMS44IDIxNS41IDIxLjUgMjY5LjhsLTIwLjQgNC45Yy0yMC4zLTQxLjEtNDkuNy0xMTUuNS03MC40LTE4Mi40IDcuMi02LjkgMTEuOC0xNi42IDExLjgtMjcuNSAwLTIxLTE3LTM4LTM4LTM4LTIxLjEgMC0zOCAxNy0zOCAzOCAwIDE3LjkgMTIuNCAzMi45IDI5LjEgMzYuOSAyMC44IDc4IDM5LjUgMTU1IDQ3IDE5OS45LTYgNS43LTkuNCAxMS44LTkuNCAxOC4xbDEwLjIgNjAuM2MwLTI4LjUgMTAzLjEtNTEuNiAyMzAuMi01MS42eiIgc3Ryb2tlLXdpZHRoPSIxNy4yOCIvPjwvZz48Y2lyY2xlIGN4PSI0MDEuMSIgY3k9IjExMi45IiByPSIyNS45Ii8+PGNpcmNsZSBjeD0iMjI2LjEiIGN5PSIxNjQuOCIgcj0iMjMiLz48Y2lyY2xlIGN4PSIxMTQuOSIgY3k9IjI3My44IiByPSIyMi40Ii8+PGNpcmNsZSBjeD0iNTc2IiBjeT0iMTY0LjgiIHI9IjIzIi8+PGNpcmNsZSBjeD0iNjg4LjQiIGN5PSIyNzMuOCIgcj0iMjIuNCIvPjwvc3ZnPg==",
  rw: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIHdpZHRoPSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQwMC40IDcwOC4zYy01Ny4xIDAtMTEwLjgtNS44LTE1MS4yLTE2LjUtNDUuNS0xMi02OC41LTI4LjQtNjguNS00OC42VjU4MmMwLTI4LjQgNDQuMS00Ni4yIDc0LjctNTUuM2w4LjEtMTcyLjRjLTMuMi0yLjYtNS42LTUuMy03LjMtOC4xbC0uMi0uMy0yNC43LTUyLjhjLTE5LjMtOS41LTE5LjMtMTktMTkuMy0yMi4yVjE0NS4zaDc0LjV2NTAuOGg0My4ydi01MC4zbDEzNy4yLjF2NTAuMkg1MTB2LTUwLjhoNzUuNnYxMjUuNGMwIDcuOC00LjIgMTQuNS0xMyAxOS45bC0yNCA1NS40LS40LjhjLTIuMSAzLjEtNSA2LTguNSA4LjZsNy42IDE3MC45YzIxLjEgNiAzOC44IDEzLjUgNTEuNSAyMS42IDE2LjUgMTAuNSAyNC44IDIxLjkgMjQuOCAzNC4xIDAgLjggMCAxLjYtLjEgMi41bC0uMSA1OC42YzAgMjAuMi0yMy40IDM2LjYtNjkuNiA0OC42LTQwLjkgMTAuNy05NS41IDE2LjYtMTUzLjQgMTYuNnoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNNTc2IDE1NXYxMTUuN2MwIDQuNS0zLjIgOS0xMC45IDEzLjFsLTI0LjkgNTcuN2MtMi4yIDMuMi01LjYgNi4yLTEwLjQgOUw1MzggNTM0YzQ3LjIgMTIuNSA3NiAzMC44IDc2IDQ4LjIgMCAuNiAwIDEuMy0uMSAxLjlsLS4xIDU5LjNjMCAzMC42LTk1IDU1LjQtMjEzLjMgNTUuNC0xMTYuNiAwLTIxMC0yNC43LTIxMC01NS40di02MS4yYzAtMTcuMiAyOC4yLTM1LjMgNzQuNC00Ny44bDguNi0xODQuN2MtNC4xLTIuNi03LjItNS4zLTguOS04LjFsLTI2LTU1LjdjLTEwLjQtNC41LTE2LjgtOS42LTE2LjgtMTVWMTU1SDI3N3Y1MC44aDYyLjZ2LTUwLjNsMTE3LjcuMXY1MC4ySDUyMFYxNTV6bTE5LjUtMTkuNGgtOTUuMXY1MC43aC0yMy44di01MC4yaC0xOS40bC0xMTcuNS0uMUgzMjB2NTAuM2gtMjMuOHYtNTAuN2gtOTMuOXYxMzUuMWMwIDE1LjQgMTIuNSAyNC42IDIxLjYgMjkuNWwyMy4xIDQ5LjQuMy44LjQuOGMxLjUgMi42IDMuNSA1LjEgNS44IDcuNWwtNy42IDE2MC44Yy0xOC43IDUuOS0zNC4yIDEyLjktNDYuMiAyMC41LTguMyA1LjMtMTQuOSAxMS4xLTE5LjUgMTcuMS02LjIgNy45LTkuMyAxNi4yLTkuMyAyNC45djYxLjNjMCAxOC4zIDEzLjkgMzAuOCAyNS41IDM4IDEyLjIgNy43IDI5LjEgMTQuNCA1MC4yIDIwIDQxLjEgMTAuOSA5NS43IDE2LjggMTUzLjcgMTYuOCA1OC44IDAgMTE0LTUuOSAxNTUuOC0xNi44IDIxLjQtNS42IDM4LjYtMTIuMyA1MC45LTE5LjkgMTEuOS03LjMgMjUuOS0xOS45IDI1LjktMzguMWwuMS01OC4yYy4xLTEuMS4xLTIuMS4xLTMgMC04LjctMy4xLTE3LjMtOS40LTI1LjItNC44LTYtMTEuNC0xMS44LTE5LjktMTcuMi0xMi4zLTcuOC0yOC4yLTE0LjctNDcuMy0yMC42bC03LTE1OS4xYzIuNy0yLjQgNS01IDYuOC03LjhsMS0xLjQuNi0xLjYgMjIuNS01Mi4xYzEyLjMtOC43IDE0LjktMTguOSAxNC45LTI2LjRWMTM1LjZ6Ii8+PGcgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0xOTEgNTgxLjZ2NjEuNmMwIDMwLjYgOTMuMSA1NS40IDIwOS42IDU1LjQgMTE4LjMgMCAyMTMuMi0yNC44IDIxMy4yLTU1LjRsLS4zLTYxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxOC4zNiIvPjxwYXRoIGQ9Ik02MTMuOSA1ODJjMCAzMC42LTk0LjUgNTUuNC0yMTEuMSA1NS40UzE5MS43IDYxMi42IDE5MS43IDU4MnM4Ny41LTY0IDIxMS4xLTY0YzEyMS42LS4xIDIxMS4xIDMzLjMgMjExLjEgNjR6IiBzdHJva2Utd2lkdGg9IjIxLjYiLz48cGF0aCBkPSJNMjc1LjggMjYwLjlsLTEwLjUgMjgwLjZjMCAxOS43IDYyLjEgMzQuMSAxMzYuOCAzNC4xIDc0LjggMCAxMzYuMS0xNC40IDEzNi4xLTMzLjlsLTE0LjktMjgwLjh6IiBzdHJva2Utd2lkdGg9IjE1LjEyIi8+PHBhdGggZD0iTTIzMS4zIDI2OC4xbDMzLjggNzMuMWM5LjUgMTYuNSA2MS42IDI4LjUgMTM3LjYgMjguNXMxMjYuNC0xMS43IDEzNy42LTI4LjVsMzIuOC03My4xIiBzdHJva2Utd2lkdGg9IjE1LjEyIi8+PHBhdGggZD0iTTUyMiAxNTR2NTAuOGgtNjMuN3YtNDkuMWwtMTE2LjYtLjF2NDkuMkgyNzhWMTU0aC01NS4xdjExNi43YzAgMjAuMSA4My4xIDM2LjQgMTc4LjUgMzYuNCA5NS41IDAgMTc2LjgtMTYuMyAxNzYuOC0zNi40VjE1NHoiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS13aWR0aD0iMTkuNDQiLz48L2c+PC9zdmc+",
  bw: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIHdpZHRoPSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzOC45IDcwMS44Yy00MS44IDAtNzctMTQuOC0xMDEuOC00Mi44LTIyLjktMjUuOC0zNS41LTYyLjEtMzUuNS0xMDIuMiAwLTU4LjkgNDEuMS03Mi45IDc3LjEtNzguNWwxNS42LTIuNS00LjggMTVjLTYuNSAyMC41LTEwLjIgNDMtMTAuMiA2MS4zIDAgNTQuMyAyNC41IDg4LjEgNjQuMiA4OC4xIDI5LjUgMCA1Ny4yLTI0LjIgNzEuNC02MS4xLTMzLTYuNi00OS41LTE2LjQtNTAuMS0yOS45bC03LjMtNTUuN3YtLjVjMC05LjEgNS45LTE1LjMgMTMuMi0yMC4zLTEuNi00LjQtMy4zLTkuMS01LjEtMTMuOC0xNi42LTQ0LjktMzcuMy0xMDAuOC0zNy4zLTE0My42IDAtNTAuMiAyMi4xLTk1LjEgNjIuMy0xMjYuNSAyMi45LTMyIDY5LjItNjguNSAxMDUuMy05MC42bDUuMS0zLjEgNS4xIDMuMWMzNiAyMiA4Mi4zIDU4LjUgMTA1LjMgOTAuNyA0MC4yIDMxLjQgNjIuMyA3Ni4xIDYyLjMgMTI2IDAgNDMtMjAuNyA5OS40LTM3LjQgMTQ0LjYtMS43IDQuNS0zLjMgOS00LjkgMTMuMiA3LjIgNSAxMy4yIDExLjMgMTMuMiAyMC4zdi42bC03LjIgNTUuNWMtLjUgMTMuNS0xNyAyMy40LTUwIDI5LjkgMTQuMSAzNi45IDQxLjkgNjEuMSA3MS40IDYxLjEgMzkuNSAwIDY0LjItMzMuOCA2NC4yLTg4LjEgMC0xOC41LTMuNy00MC44LTEwLjItNjEuM2wtNC44LTE1IDE1LjYgMi41YzI1LjIgNCA0Mi42IDEwLjggNTQuOSAyMS42IDE0LjkgMTMuMSAyMi4yIDMxLjggMjIuMiA1Ni45IDAgNDAuMS0xMi42IDc2LjQtMzUuNSAxMDIuMi0yNC44IDI4LTU5LjkgNDIuOC0xMDEuOCA0Mi44LTY1LjQgMC0xMTguNi00NS4xLTEzNy40LTExNS44LTguMi4zLTE2LjUuNS0yNC44LjVzLTE2LjYtLjItMjQuOC0uNWMtMTkgNzAuOC03Mi4xIDExNS45LTEzNy41IDExNS45eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik00MDEuMSAxMDYuNGMzMy41IDIwLjUgODAuNiA1Ni44IDEwMy4yIDg5LjNDNTQwLjIgMjIzLjIgNTY0IDI2NCA1NjQgMzE1YzAgNDguMy0yOC41IDExNy42LTQ0LjQgMTYxLjkgOS43IDUuNCAxNS4yIDEwLjIgMTUuMiAxNi4ybC03LjIgNTUuNGMwIDkuNS0yMSAxNy45LTUzLjEgMjMuMSAxMy4yIDQ0LjcgNDUuOSA3OC40IDg0LjIgNzguNCA0NS43IDAgNzMuOS0zOC45IDczLjktOTcuOCAwLTIwLTQtNDMuMy0xMC43LTY0LjMgNDEuNSA2LjYgNjguOSAyMS45IDY4LjkgNjguOSAwIDc1LTQ1LjYgMTM1LjItMTI3LjUgMTM1LjItNjIgMC0xMTMuNi00My42LTEyOS45LTExNi4xLTEwLjQuNi0yMS4yIDEtMzIuNCAxcy0yMi0uMy0zMi40LTFjLTE2LjIgNzIuNS02OCAxMTYuMS0xMzAgMTE2LjEtODIgMC0xMjcuNS02MC4zLTEyNy41LTEzNS4yIDAtNDcgMjcuNC02Mi40IDY4LjktNjguOS02LjYgMjEtMTAuNyA0NC40LTEwLjcgNjQuMyAwIDU5IDI4LjEgOTcuOCA3My45IDk3LjggMzguMyAwIDcxLjEtMzMuNyA4NC4yLTc4LjQtMzIuMi01LjItNTMuMS0xMy41LTUzLjEtMjNMMjY3IDQ5M2MwLTUuOSA1LjUtMTAuOCAxNS4yLTE2LjItMTUuOC00NC4zLTQ0LjQtMTEzLjMtNDQuNC0xNjEuNiAwLTUxIDIzLjktOTIuMiA1OS43LTExOS43IDIzLTMyLjQgNzAuMS02OC41IDEwMy42LTg5LjFtMC0yMi44bC0xMC4yIDYuM0MzNTcgMTEwLjYgMzA5LjEgMTQ3IDI4My42IDE4MmMtNDEuOSAzMy4zLTY1IDgwLjUtNjUgMTMzLjMgMCA0NC42IDIxIDEwMS4zIDM3LjggMTQ3IC45IDIuNSAxLjcgNC45IDIuNiA3LjEtNiA1LjUtMTEuMyAxMy4yLTExLjMgMjMuN3YxLjNsLjIgMS4zIDcuMSA1NC44Yy4zIDUuNSAyLjYgMTIuOSAxMC4zIDE5LjggNC4xIDMuNyA5LjQgNi44IDE2LjEgOS43IDUuNiAyLjQgMTIuMiA0LjUgMTkuOCA2LjUtNS4zIDEwLjctMTIgMjAuMS0xOS43IDI3LjQtOC4xIDcuOC0yMS4zIDE3LjEtMzguMSAxNy4xLTE2LjEgMC0yOS4xLTYuNC0zOC40LTE5LTEwLjQtMTMuOS0xNS45LTM0LjYtMTUuOS01OS40IDAtMTcuNSAzLjYtMzguOCA5LjctNTguNGw5LjQtMjkuOS0zMSA0LjljLTI3LjEgNC4zLTQ2IDExLjktNTkuNyAyMy45LTE3IDE0LjgtMjUuNSAzNi40LTI1LjUgNjQuMyAwIDIxIDMuMSA0MC44IDkuNSA1OS4xIDYuNSAxOC45IDE2LjEgMzUuNSAyOC41IDQ5LjYgMjYuNyAzMC4xIDY0LjQgNDYgMTA5LjEgNDYgNjcuNiAwIDEyMy00NC44IDE0NC42LTExNS41IDUuOC4yIDExLjcuMiAxNy42LjJzMTEuOC0uMSAxNy42LS4yYzIxLjcgNzAuNiA3NyAxMTUuNSAxNDQuNiAxMTUuNSA0NC43IDAgODIuNC0xNS45IDEwOS4xLTQ2IDEyLjQtMTQgMjItMzAuNyAyOC41LTQ5LjYgNi4zLTE4LjMgOS41LTM4LjEgOS41LTU5LjEgMC0yNy44LTguNS00OS41LTI1LjUtNjQuMy0xMy43LTEyLTMyLjctMTkuNy01OS43LTIzLjlsLTMxLTQuOSA5LjQgMjkuOWM2LjIgMTkuNyA5LjcgNDAuOSA5LjcgNTguNCAwIDI0LjgtNS41IDQ1LjUtMTUuOSA1OS40LTkuNCAxMi42LTIyLjQgMTktMzguNCAxOS0xNi44IDAtMzAtOS4zLTM4LjEtMTcuMS03LjctNy4zLTE0LjQtMTYuNy0xOS43LTI3LjUgNy42LTEuOSAxNC4xLTQuMSAxOS44LTYuNSA2LjctMi45IDEyLTYgMTYuMS05LjcgNy43LTYuOSA5LjgtMTQuMyAxMC4yLTE5LjhsNy4xLTU0LjUuMS0xLjN2LTEuNGMwLTEwLjUtNS4zLTE4LjEtMTEuMy0yMy43LjgtMi4yIDEuNi00LjMgMi40LTYuNSAxNy00NiAzOC0xMDMuMSAzOC0xNDggMC01Mi42LTIzLTk5LjctNjUtMTMyLjgtMTEuNC0xNS43LTI4LTMyLjYtNDkuNC01MC40LTE4LjItMTUuMi0zOC44LTMwLTU4LTQxLjh6Ii8+PGcgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik01MjcuOCA1NDguNWw3LjItNTUuN2MwLTE5LjctNTguOS0zNS4yLTEzMy45LTM1LjItNzUuMSAwLTEzMy45IDE1LjctMTMzLjkgMzUuMmw3LjIgNTUuNyIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjE2LjkwNiIvPjxlbGxpcHNlIGN4PSI0MDEuMSIgY3k9IjU0OC41IiBmaWxsPSJub25lIiByeD0iMTI2LjciIHJ5PSIyOC40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMTUuOTExIi8+PHBhdGggZD0iTTMzMy45IDUyNy4xYzAgNjQuNC00MC40IDEyMS45LTkwLjUgMTIxLjktNDUuNyAwLTczLjktMzguOS03My45LTk3LjggMC0yMCA0LTQzLjMgMTAuNy02NC4zLTQxLjUgNi42LTY4LjkgMjEuOS02OC45IDY4LjkgMCA3NSA0NS42IDEzNS4yIDEyNy41IDEzNS4yIDc0LjUgMCAxMzQuMi02My4yIDEzNS4yLTE2My42bTk0LjQtLjNjMCA2NC40IDQwLjQgMTIxLjkgOTAuNSAxMjEuOSA0NS43IDAgNzMuOS0zOC45IDczLjktOTcuOCAwLTIwLTQtNDMuMy0xMC43LTY0LjMgNDEuNSA2LjYgNjguOSAyMS45IDY4LjkgNjguOSAwIDc1LTQ1LjYgMTM1LjItMTI3LjUgMTM1LjItNzQuNSAwLTEzNC4yLTYzLjItMTM1LjItMTYzLjYiIGZpbGw9IiNmZmYiIHN0cm9rZS13aWR0aD0iMTguMzYiLz48ZyBmaWxsPSJub25lIj48cGF0aCBkPSJNNTE5LjggNDc2LjJjMTUuOC00NC43IDQ0LjQtMTEzLjMgNDQuNC0xNjEuNiAwLTUxLTIzLjktOTIuNC01OS43LTExOS45LTIyLjctMzIuNC02OS45LTY5LjItMTAzLjItODkuNy0zMy41IDIwLjUtODAuNiA1Ny4yLTEwMy4yIDg5LjctMzUuOSAyNy40LTU5LjcgNjguOC01OS43IDExOS44IDAgNDguMyAyOC42IDExNyA0NC40IDE2MS43IiBzdHJva2Utd2lkdGg9IjIwLjUyIi8+PHBhdGggZD0iTTQwMS4xIDIxMS4ydjE4NC43bS03MC4yLTk0aDE0MC40IiBzdHJva2Utd2lkdGg9IjE5LjQ0Ii8+PC9nPjwvZz48L3N2Zz4=",
  nw: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIHdpZHRoPSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik02NDUuMjU0IDY5Mi4yVjI4MC42Yy01Ny4yLTQxLjgtMTQyLjMtODUuOC0xOTYuNi05OC4xLTQyLjYtOS43LTEwMS4zLTIuMS0xNDguNiAxMy4yLTEzLjMtMzQuOS00OC01OC42LTgxLjUtNjAuNCA2LjMgMjkuNiA1LjkgNzQuMyAyNC4zIDk3LjctNyAxNi4yLTMyLjEgNjkuNC00OC43IDExOS4zdjM5LjRjLTEzLjkgNTkuMS0zNC45IDE2Ni4yLTQzLjQgMjEyLjhsMTIwLjkgNTEuNSAyMi40LTU4LjFjMTUuMi0yMi43IDQ1LjctNjAuOSA2NS4xLTc4LjIgMjQuNC0xMC4zIDU1LjgtMjkuNCA2Ni42LTU5LjIgMTQtMzguNCA2LjMtODQuMy0xMC41LTExOS45IDMxIDMwLjIgNTAgNzcgNTAgMTI3LjggMCA2OC4xLTM4LjEgMTQ1LjktMTA0LjcgMjIzLjdoMjg0Ljd6IiBmaWxsPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMjkuMTYiLz48cGF0aCBkPSJNMTc5Ljc1NCA1NzQuOGMxOS40LTEwLjkgMzMuOSAzLjggMjIuNCAyNS4yeiIgc3Ryb2tlLXdpZHRoPSI5LjE2OSIvPjxwYXRoIGQ9Ik0yMzEuNDU0IDM1Ny45Yy02LjkgOS41LS42IDI5LjMgNiAzNC41IDQuNS0uNiAxNC4xLTQuNCAxOC42LThsMjEuNS0yNC45LTQuNS0zLjdjLTguOC0uMS0zMC43LS4xLTQxLjYgMi4xeiIgc3Ryb2tlLXdpZHRoPSIuOTUyIi8+PHBhdGggZD0iTTMyMC4wNTQgMTg2Yy0xMi41LTE3LjktOS45LTQ5LjcgNy03NS4xIDI4LjIgMTQuMyAzOS43IDQ3LjQgMzUuMSA3MC42IiBmaWxsPSIjZmZmIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIzLjc2Ii8+PC9nPjwvc3ZnPg==",
  pw: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIHdpZHRoPSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Im00OTcuOSAyNDBjMCA1My42LTQ0IDkzLjktOTguMSA5My45cy05OC4xLTQwLjMtOTguMS05My45IDQ0LTkzLjkgOTguMS05My45YzU0LjIuMSA5OC4xIDQwLjQgOTguMSA5My45em0yOC41IDk3LjZ2NTUuM2MtMzAuMiAzLTQyLjggMTIuMS00Mi44IDI4IDAgNTYuOSAzNiAxMjMuNCAxMDkuMSAxODcuOXY2MC45YzAgMTcuNC04Ny41IDMwLjgtMTkyLjcgMzAuOHMtMTkyLjctMTMuNC0xOTIuNy0zMC44bC0uMS02MC42YzczLjEtNjQuNSAxMDguMS0xMzEuMSAxMDguMS0xODggMC0xNS45LTEzLjYtMjUuMi00My44LTI4LjJ2LTU1LjN6IiBmaWxsPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMwLjI0Ii8+PHBhdGggZD0ibTIwNy4yIDYwOGMwIDE3LjQgODcuNSAzMC4zIDE5Mi43IDMwLjNzMTkyLjYtMTIuOSAxOTIuNi0zMC4yIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjE2LjIiLz48cGF0aCBkPSJtMjcyLjYgMzg2LjdoMjUyLjciIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMTQuMDQiLz48L2c+PC9zdmc+",
  kb: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIHdpZHRoPSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTY5NC43IDM2My4yYy05LjctNy41LTIyLjYtMTEuMi0zOC0xMS4yaC0xLjRjLTIuMSAwLTQuMi4xLTYuNS4xLTIuNyAwLTUuNi4xLTguNS4xIDMuMy0yMy43LjYtNDEuNi04LTU1LjUtNi42LTEwLjYtMTUuOS0xOC4zLTI3LjgtMjIuOS05LjMtMy43LTIwLjMtNS40LTMzLjYtNS40LTEyLjIgMC0yNS4yIDEuNC0zOC44IDMuMi0zLTE0LjEtOS4zLTI1LjQtMTguNy0zMy41LTkuNS04LjMtMjAuNi0xMi41LTMzLTEyLjUtMjQuMSAwLTQ3LjIgMTYuMy02NS45IDI5LjZ2LTgwLjdoNDkuN3YtMzAuMmgtNDkuN1Y5NC42aC0zMC4ydjQ5LjdoLTQ2LjR2MzAuMmg0Ni40djc4LjljLTE4LjMtMTMtNDAuNC0yOC02My41LTI4LTEyLjQgMC0yMy41IDQuMi0zMyAxMi41LTkuNCA4LjEtMTUuNiAxOS4zLTE4LjcgMzMuNS0xMy43LTEuOC0yNi43LTMuMi0zOC45LTMuMi0xMy4zIDAtMjQuMyAxLjctMzMuNyA1LjQtMTEuOSA0LjYtMjEuMiAxMi4zLTI3LjggMjIuOS04LjYgMTQtMTEuMyAzMi04LjEgNTUuNS0yLjggMC01LjYtLjEtOC4yLS4xLTIuNSAwLTQuOS0uMS03LS4xSDE0NGMtMTUuMiAwLTI4LjQgMy45LTM4LjIgMTEuMS04LjUgNi40LTE4LjYgMTguMy0xOC42IDM5LjQgMCAyNi4xIDE4LjMgNTMuOCAzNy41IDgzLjJsNS43IDguNyAyNS42IDUzLjljLTcuNiA4LjMtMTEuMyAxNy4zLTExLjMgMjYuOHYyLjJsLjQgMi4yIDE1LjcgNjQuNmMxLjEgMTIuOSAxMC4yIDI0IDI3IDMyLjkgMTIuNiA2LjcgMzAuMSAxMi41IDUyLjEgMTcuNSA0My4xIDkuNyAxMDAuMSAxNSAxNjAuNiAxNSA2MCAwIDExNi43LTUuMyAxNTkuNy0xNC44IDIxLjgtNC45IDM5LjMtMTAuNyA1Mi4xLTE3LjMgMTcuMS04LjkgMjYuNS0xOS45IDI3LjktMzIuNmwxNC43LTY1LjcuNi0xLjl2LTIuMWMwLTkuNC00LTE4LjEtMTEuNi0yNi4xbDIzLjgtNTIuNmMyLjUtMy43IDQuOS03LjUgNy4zLTExIDE5LjQtMjkuMiAzNy44LTU2LjcgMzcuOC04Mi43IDAtMjEuMS05LjktMzMtMTguMS0zOS4zeiIvPjxnIHN0cm9rZT0iI2YyZjJmMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMTUuMTIiPjxwYXRoIGQ9Ik0xODIgMzcxLjVjLTExLjkuMy0yNS45LS4xLTM3LjUtLjMtMjEuOS0uMy0zOS40IDguNy0zOS40IDMyLjIgMCAzOS4xIDYwLjYgOTUuNyA3My4zIDE0Ni43Ii8+PHBhdGggZD0iTTI4NC4xIDI5My41Yy00NS42LTYuMy04My4zLTEzLjgtMTAwLjMgMTMuNy0yNyA0My42IDM1LjYgMTUwLjcgNTUuMSAyMjIuNCIvPjxwYXRoIGQ9Ik0zOTguOSAyODYuOGMtMjQuMy05LTY3LjktNjEuNy05OS44LTMzLjktNDMuNiAzNy45IDIyLjkgMTczLjkgMzguMSAyNjAuNW0yODAuNy0xNDEuOWMxMS45LjMgMjUuOS0uMSAzNy41LS4zIDIxLjktLjMgMzkuNCA4LjcgMzkuNCAzMi4yIDAgMzkuMS02MC42IDk1LjctNzMuMyAxNDYuNyIvPjxwYXRoIGQ9Ik01MTUuOSAyOTMuNWM0NS42LTYuMyA4My4zLTEzLjggMTAwLjMgMTMuNyAyNyA0My42LTM1LjYgMTUwLjctNTUuMSAyMjIuNCIvPjxwYXRoIGQ9Ik00MDEuMSAyODYuOGMyNC4zLTkgNjcuOS02MS43IDk5LjgtMzMuOSA0My42IDM3LjktMjIuOSAxNzMuOS0zOC4xIDI2MC41Ii8+PC9nPjxwYXRoIGQ9Ik0xNzcuOSA1NTRjMzQtMjMuMyAxMjAuNi0zOS42IDIyMi0zOS42IDEwMi41IDAgMTkwLjMgMTYuMyAyMjMuNiA0MGwzMS44LTc4LjFjLTExLjggMTMuMS0yMy43IDE4LjUtMzMuOSAxNS4zLTI2LjktOC40LTI2LjUtNDAuNi0yNC40LTY2LjUtMTYuNCAyOS41LTM5LjMgNDQuNy02My45IDM5LjUtMjQuOS01LjMtNDAtNDAuNS0zOS02OC42LTE3LjUgMzUuNi00OS40IDU0LjEtOTQuMSA1NC4xcy03Ni42LTE4LjYtOTQuMS01NC4yYzEuMSAyOC4xLTE0IDYzLjMtMzkgNjguNi0yNC42IDUuMi00Ny40LTEwLTYzLjktMzkuNSAxLjkgMjUuOSAyLjYgNTguNS0yNC40IDY2LjUtOS4xIDIuNy0yMi4xLTMuOC0zMy45LTE1LjN6IiBzdHJva2Utd2lkdGg9IjEyLjk2Ii8+PGcgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE2Mi41IDU3NS45YzAtMzQuMyAxMDYuMy02MS43IDIzNy40LTYxLjdzMjM3LjQgMjcuMyAyMzcuNCA2MS43bS00NzUgMS44bDE2LjIgNjUuMW00NTkuMi02NS4xbC0xNi4yIDY1LjEiIHN0cm9rZS13aWR0aD0iMTIuOTYiLz48cGF0aCBkPSJNMTc4LjYgNjQyLjJjMC0yNy40IDk5LjEtNDkuNyAyMjEuNC00OS43czIyMS40IDIyLjIgMjIxLjQgNDkuNyIgc3Ryb2tlLXdpZHRoPSIxNS4xMiIvPjxwYXRoIGQ9Ik00MDAgMjg2Ljh2MTYwLjkiIHN0cm9rZS13aWR0aD0iNi40OCIvPjwvZz48L2c+PC9zdmc+",
  qb: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIHdpZHRoPSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQwMCA3MDQuNGMtNjIgMC0xMjAuNS01LjUtMTY0LjgtMTUuNC00OS43LTExLjEtNzQuMi0yNS44LTc1LTQ0LjhMMTUwIDU4N3YtLjljMC01LjQgMS42LTEzLjIgOC42LTIxLjQtNy41LTQzLjEtMjQuNi0xMTcuMi00NC42LTE5Mi4yLTE4LjQtNi45LTMwLjgtMjQuNS0zMC44LTQ0LjYgMC0yNi40IDIxLjQtNDcuNyA0Ny43LTQ3LjdzNDcuNyAyMS40IDQ3LjcgNDcuN2MwIDExLjEtMy43IDIxLjUtMTAuNiAyOS45IDIxLjEgNjcuMSA0Ni45IDEzNi43IDY0LjkgMTc1LjJsNS4zLTEuM2MtLjUtNTUuMy05LjEtMTY0LjMtMjAuNi0yNjEuNi0xOC42LTgtMzEtMjYuNi0zMS00Ny4xIDAtMjguMyAyMy01MS4zIDUxLjMtNTEuM3M1MS4zIDIzIDUxLjMgNTEuM2MwIDEzLjgtNS40IDI2LjctMTUgMzYuMyAxNy45IDkzLjUgNDcuNyAyMTEuNiA2NS4zIDI1OC45bDUuNC0uM2M4LjYtNjYgMTkuNC0xODQuNSAyNC42LTI5NC41LTE0LjktOS45LTIzLjgtMjYuNS0yMy44LTQ0LjUgMC0yOS44IDI0LjItNTQgNTQtNTRzNTQgMjQuMiA1NCA1NGMwIDE4LTguOSAzNC42LTIzLjUgNDQuNiA1LjIgMTEwLjEgMTYgMjI4LjUgMjQuNiAyOTQuNWw1LjQuM2MxNy42LTQ3LjMgNDcuNC0xNjUuMyA2NS4zLTI1OC45LTkuNi05LjYtMTUtMjIuNS0xNS0zNi4zIDAtMjguMyAyMy01MS4zIDUxLjMtNTEuM3M1MS4zIDIzIDUxLjMgNTEuM2MwIDIwLjYtMTIuNCAzOS4xLTMxIDQ3LjEtMTEuNiA5Ny4zLTIwLjIgMjA2LjMtMjAuNiAyNjEuNmw1LjMgMS4zYzE4LTM4LjQgNDMuOC0xMDguMSA2NC45LTE3NS4yLTYuOS04LjQtMTAuNi0xOC45LTEwLjYtMjkuOSAwLTI2LjQgMjEuNC00Ny43IDQ3LjctNDcuN3M0Ny43IDIxLjQgNDcuNyA0Ny43YzAgMjAuMS0xMi40IDM3LjctMzAuOCA0NC42LTE5LjkgNzUuMS0zNyAxNDkuMS00NC42IDE5Mi4yIDUuNyA2LjcgOC42IDEzLjggOC42IDIxLjN2LjlsLTEwLjMgNTcuN2MtMS4yIDE4LjktMjUuNyAzMy41LTc1IDQ0LjYtNDMuOCA5LjYtMTAyLjMgMTUuMS0xNjQuNCAxNS4xem0tMTg1LTcxLjdjMTAuOCA3LjIgMzQuOSAxNC4zIDY2LjIgMTkuMSAzNC4zIDUuNCA3NS40IDguMiAxMTguOCA4LjIgOTggMCAxNjMuOS0xMy44IDE4NC4yLTI2LjlsMy4zLTIuOWMtNC4yLTQuMi0xNy0xMS40LTQ4LjctMTcuNy0zNS4zLTYuOS04NC43LTEwLjctMTM4LjktMTAuNy01MC4zIDAtOTguMiAzLjktMTM0LjYgMTEtMzMuMiA2LjUtNDcuNSAxMy44LTUyLjYgMTcuOXoiLz48cGF0aCBkPSJNNDAwIDEzNC41YzI0LjQgMCA0NC4zIDE5LjkgNDQuMyA0NC4zIDAgMTcuMS05LjYgMzEuOS0yMy44IDM5LjIgNS4xIDExNCAxNi44IDI0Mi42IDI2IDMwOS4xbDIwLjQgMS4zYzE4LjEtNDQuNyA1MS40LTE3Ni44IDY5LjQtMjcyLjYtOS43LTcuNi0xNS45LTE5LjQtMTUuOS0zMi43IDAtMjMgMTguNi00MS42IDQxLjYtNDEuNnM0MS42IDE4LjYgNDEuNiA0MS42YzAgMTktMTIuNyAzNS0zMC4yIDQwLTEyLjMgMTAyLjEtMjEuOCAyMjItMjEuNSAyNzYuNGwyMC40IDQuOWMyMC4zLTQxLjEgNDkuNy0xMjEuOSA3MC40LTE4OC45LTcuMi02LjktMTEuOC0xNi42LTExLjgtMjcuNSAwLTIxIDE3LTM4IDM4LTM4czM4IDE3IDM4IDM4YzAgMTcuOS0xMi40IDMyLjktMjkuMSAzNi45LTIwLjggNzgtMzkuNSAxNTguMi00NyAyMDMuMSA2IDUuNyA5LjQgMTEuOCA5LjQgMTguMWwtMTAuMiA1Ny0uMS4xYzAgMjguNS0xMDMgNTEuNi0yMzAgNTEuNi0xMjcuMSAwLTIzMC0yMy40LTIzMC01MS41bC0xMC4yLTU3LjFjMC02LjMgMy4yLTEyLjUgOS40LTE4LjMtNy41LTQ0LjktMjYuMS0xMjUuMi00Ny0yMDMuMS0xNi42LTQtMjkuMS0xOS0yOS4xLTM2LjkgMC0yMSAxNy0zOCAzOC0zOCAyMS4xIDAgMzggMTcgMzggMzggMCAxMC44LTQuNSAyMC42LTExLjggMjcuNSAyMC44IDY3IDUwLjEgMTQ3LjkgNzAuNCAxODguOWwyMC40LTQuOWMuMy01NC4yLTkuMi0xNzQuMy0yMS41LTI3Ni40LTE3LjQtNS0zMC4yLTIxLTMwLjItNDAgMC0yMyAxOC42LTQxLjYgNDEuNi00MS42czQxLjYgMTguNiA0MS42IDQxLjZjMCAxMy4zLTYuMyAyNS4xLTE1LjkgMzIuNyAxOCA5NS44IDUxLjIgMjI3LjkgNjkuNCAyNzIuNmwyMC40LTEuM2M5LjEtNjYuNSAyMC44LTE5NSAyNi0zMDkuMS0xNC4xLTcuNS0yMy44LTIyLjEtMjMuOC0zOS4yLjEtMjQuMyAyMC00NC4yIDQ0LjQtNDQuMm0wIDUzNS4zYzg5LjQgMCAxNjUtMTIuMSAxOTAuMi0yOC44bDktNy45YzAtMjUuNi04OS4xLTQxLTE5OS00MXMtMTk5IDE4LjQtMTk5IDQxbDguMSA3LjJjMjQgMTcgMTAwLjMgMjkuNSAxOTAuNyAyOS41bTAtNTU0LjdjLTM1LjEgMC02My43IDI4LjYtNjMuNyA2My43IDAgMTkuMyA4LjYgMzcuMyAyMy4yIDQ5LjItNC40IDkyLjgtMTIuOSAxOTAuOC0yMC41IDI1Ny44LTE3LTU1LjQtMzkuNi0xNDguMS01NC4zLTIyMy41IDkuMi0xMC45IDE0LjQtMjQuNyAxNC40LTM5LjMgMC0zMy43LTI3LjMtNjEtNjEtNjFzLTYxIDI3LjMtNjEgNjFjMCAxMy41IDQuMyAyNi40IDEyLjYgMzcuMiA1LjIgNi43IDExLjcgMTIuMyAxOS4xIDE2LjQgOS4xIDc3LjQgMTYuMiAxNjEuNSAxOC45IDIxOS4yLTE1LjMtMzcuNi0zMy4yLTg3LjQtNDguNi0xMzYuMyA2LjItOS4zIDkuNi0yMC40IDkuNi0zMS42IDAtMzEuNi0yNS44LTU3LjUtNTcuNS01Ny41LTMxLjYgMC01Ny42IDI1LjctNTcuNiA1Ny4zIDAgMjIuNSAxMi45IDQyLjIgMzIuMyA1MS42IDE4LjcgNzAuOCAzNC44IDE0MC4yIDQyLjQgMTgyLjYtNi41IDkuMS04LjEgMTcuNy04LjEgMjR2MS43bC4zIDEuNyA5LjkgNTUuOGMuNCA1LjcgMi42IDEzLjUgOS43IDIxLjQgNC42IDUgMTAuNyA5LjQgMTguNyAxMy42IDEzLjEgNi45IDMxLjMgMTMuMSA1NC4xIDE4LjEgNDUgMTAuMiAxMDQuMyAxNS43IDE2NyAxNS43IDYyLjkgMCAxMjIuMS01LjUgMTY3LTE1LjcgMjIuOC01LjEgNDEtMTEuMiA1NC4xLTE4LjMgOC00LjIgMTQtOC43IDE4LjctMTMuNyA0LjEtNC41IDYuNi05LjEgOC0xMy4ybC4zLS4zLjMtMS44Yy41LTEuOS45LTMuOCAxLTUuNWwxMC01Ni40LjMtMS43VjU4NmMwLTYuMi0xLjYtMTQuOC04LjEtMjMuOSA3LjYtNDIuNCAyMy44LTExMS44IDQyLjQtMTgyLjYgMTkuNC05LjQgMzIuMy0yOS4zIDMyLjMtNTEuNiAwLTMxLjYtMjUuOC01Ny41LTU3LjUtNTcuNS0zMS42IDAtNTcuNSAyNS44LTU3LjUgNTcuNSAwIDExLjMgMy4zIDIyLjQgOS42IDMxLjYtMTUuNCA0OC45LTMzLjQgOTguNy00OC42IDEzNi4zIDIuNy01Ny44IDkuOC0xNDEuOCAxOC45LTIxOS4yIDcuMy00LjEgMTMuOS05LjYgMTkuMS0xNi40IDguMi0xMC43IDEyLjYtMjMuNSAxMi42LTM3LjIgMC0zMy43LTI3LjMtNjEtNjEtNjFzLTYxIDI3LjMtNjEgNjFjMCAxNC42IDUuMSAyOC40IDE0LjQgMzkuMy0xNC43IDc1LjQtMzcuNCAxNjgtNTQuMyAyMjMuNS03LjctNjctMTYuMS0xNjQuOS0yMC41LTI1Ny44IDE0LjUtMTEuOSAyMy4xLTI5LjggMjMuMS00OS4xLjItMzUuMi0yOC40LTYzLjgtNjMuNS02My44ek0yMzQgNjMxYzguNS0zIDIxLjYtNi43IDQxLjMtMTAgMzQuNy02IDc4LjktOS4zIDEyNC43LTkuMyA0OCAwIDkxLjIgMi45IDEyNS4xIDguNCAyMS4xIDMuNSAzNC4zIDcuMSA0Mi43IDEwLjQtOS41IDMuNi0yNS41IDguMS01MS41IDEyLjEtMzMuNyA1LjItNzMuOSA3LjktMTE2LjIgNy45LTQyLjkgMC04My40LTIuOC0xMTcuMy04LjEtMjQtMy44LTM5LjItOC4xLTQ4LjgtMTEuNHoiLz48Y2lyY2xlIGN4PSI0MDAiIGN5PSIxMTIuOSIgcj0iMjUuOSIvPjxjaXJjbGUgY3g9IjIyNSIgY3k9IjE2NC44IiByPSIyMyIvPjxjaXJjbGUgY3g9IjExMy44IiBjeT0iMjczLjgiIHI9IjIyLjQiLz48Y2lyY2xlIGN4PSI1NzUiIGN5PSIxNjQuOCIgcj0iMjMiLz48Y2lyY2xlIGN4PSI2ODcuMyIgY3k9IjI3My44IiByPSIyMi40Ii8+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjJmMmYyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTExNy42IDI4Ny45bC00LjUtMTUiIHN0cm9rZS13aWR0aD0iMTcuMjgiLz48cGF0aCBkPSJNMjI4LjggMTgwLjdsLTQuNC0xOCIgc3Ryb2tlLXdpZHRoPSIxOC4zNiIvPjxwYXRoIGQ9Ik02ODIuNyAyODcuOWw0LjYtMTUiIHN0cm9rZS13aWR0aD0iMTcuMjgiLz48cGF0aCBkPSJNNTcwLjQgMTgwLjdsNC42LTE4IiBzdHJva2Utd2lkdGg9IjE4LjM2Ii8+PHBhdGggZD0iTTM5OS41IDEwOC42VjEyNyIgc3Ryb2tlLXdpZHRoPSIyMC41MiIvPjxnIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMTUuMTIiPjxwYXRoIGQ9Ik0yNjMuNyAyNTUuOGM5LjctNy42IDE1LjktMTkuNCAxNS45LTMyLjcgMC0yMy0xOC42LTQxLjYtNDEuNi00MS42cy00MS42IDE4LjYtNDEuNiA0MS42YzAgMTkgMTIuNyAzNSAzMC4yIDQwIDEyLjMgMTAyLjEgMjEuOCAyMTUuNiAyMS41IDI2OS45bC0yMC40IDQuOU00MjAuNSAyMThjMTQuMS03LjUgMjMuOC0yMi4xIDIzLjgtMzkuMiAwLTI0LjQtMTkuOS00NC4zLTQ0LjMtNDQuM3MtNDQuMyAxOS45LTQ0LjMgNDQuM2MwIDE3LjEgOS42IDMxLjkgMjMuOCAzOS4yLTUuMSAxMTQtMTYuOCAyMzYuMS0yNiAzMDIuNmwtMjAuNCAxLjNNNTczLjMgMjYzYzE3LjQtNSAzMC4yLTIxIDMwLjItNDAgMC0yMy0xOC42LTQxLjYtNDEuNi00MS42UzUyMC4zIDIwMCA1MjAuMyAyMjNjMCAxMy4zIDYuMyAyNS4xIDE1LjkgMzIuNy0xOCA5NS44LTUxLjIgMjIxLjQtNjkuNCAyNjYuMWwtMjAuNC0xLjNtMjMxLjUtMTU1LjdjMTYuNi00IDI5LjEtMTkgMjkuMS0zNi45IDAtMjEtMTctMzgtMzgtMzhzLTM4IDE3LTM4IDM4YzAgMTAuOCA0LjUgMjAuNiAxMS44IDI3LjUtMjAuOCA2Ny01MC4xIDE0MS40LTcwLjQgMTgyLjRsLTIwLjQtNC45Ii8+PHBhdGggZD0iTTE1Ny4yIDM1NS40YzcuMi02LjkgMTEuOC0xNi42IDExLjgtMjcuNSAwLTIxLTE3LTM4LTM4LTM4LTIxLjEgMC0zOCAxNy0zOCAzOCAwIDE3LjkgMTIuNCAzMi45IDI5LjEgMzYuOSAyMC44IDc4IDM5LjUgMTU1IDQ3IDE5OS45LTYgNS43LTkuNCAxMS44LTkuNCAxOC4xbDEwLjIgNjAuM2MwLTI4LjUgMTAzLTUxLjYgMjMwLjEtNTEuNnMyMzAuMSAyMy4xIDIzMC4xIDUxLjZsMTAuMi02MC4zYzAtNi4zLTMuMi0xMi4zLTkuNC0xOC4xIi8+PC9nPjwvZz48L3N2Zz4=",
  rb: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIHdpZHRoPSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTM5OC4zIDcwOC4yYy01Ni4yIDAtMTA4LjYtNS44LTE0OC4zLTE2LjUtNDQuNi0xMi4xLTY3LjEtMjguNC02Ny4xLTQ4LjVWNTgyYzAtMjguMyA0My4xLTQ2LjEgNzMuMi01NS4ybDcuOS0xNzIuNWMtMy4yLTIuNi01LjYtNS4zLTcuMi04LjJsLS4yLS4zLTI0LjMtNTIuOGMtNy0zLjUtMTktMTAuNy0xOS0yMi4yVjE0NS4zaDczLjR2NTAuOGg0Mi4xdi01MC4ybDEzNSAuMXY1MC4xaDQyLjF2LTUwLjhoNzQuNXYxMjUuNGMwIDcuNy00LjEgMTQuNC0xMi43IDE5LjhMNTQ0LjEgMzQ2bC0uNC44Yy0yLjEgMy4xLTQuOSA2LTguNCA4LjdsNy41IDE3MS4xYzIwLjYgNiAzOCAxMy41IDUwLjUgMjEuNiAxNi4yIDEwLjUgMjQuMyAyMS44IDI0LjMgMzQgMCAuOCAwIDEuNi0uMSAyLjVsLS4xIDU4LjhjMCAyMC4yLTIzIDM2LjUtNjguNCA0OC41LTQwLjQgMTAuMy05My44IDE2LjItMTUwLjcgMTYuMnoiLz48cGF0aCBkPSJNNTcwLjYgMTU1djExNS43YzAgNC41LTMuMSA5LTEwLjcgMTMuMWwtMjQuNSA1Ny43Yy0yLjEgMy4yLTUuNSA2LjItMTAuMiA5bDggMTgzLjVjNDYuMyAxMi41IDc0LjYgMzAuOCA3NC42IDQ4LjIgMCAuNiAwIDEuMy0uMSAxLjlsLS4xIDU5LjNjMCAzMC42LTkzLjEgNTUuNC0yMDkuMiA1NS40LTExNC41IDAtMjA1LjgtMjQuNy0yMDUuOC01NS40di02MS4yYzAtMTcuMiAyNy40LTM1LjMgNzIuOC00Ny44bDguNC0xODQuN2MtNC0yLjYtNy4xLTUuMy04LjctOC4xbC0yNS42LTU1LjdjLTEwLjItNC41LTE2LjYtOS42LTE2LjYtMTVWMTU1aDU0djUwLjhoNjEuNnYtNTAuM2wxMTUuNi4xdjUwLjJoNjEuNlYxNTV6bTE5LjUtMTkuNGgtOTIuOXY1MC43aC0yMy44di01MGgtMTkuM2wtMTE1LS4xSDMyMHY1MC4xaC0yMy44di01MC43aC05Mi43djEzNS4xYzAgMTUuMyAxMi40IDI0LjQgMjEuMyAyOS4zbDIyLjggNDkuNS4zLjguNC44YzEuNSAyLjcgMy41IDUuMiA1LjcgNy41bC03LjMgMTYxLjFjLTE4LjQgNS45LTMzLjUgMTIuOS00NS40IDIwLjYtMTIuOSA4LjQtMjguMSAyMi42LTI4LjEgNDEuOHY2MS4yYzAgMTggMTMuNSAzMC42IDI0LjggMzcuOCAxMiA3LjcgMjguNSAxNC40IDQ5LjQgMjAgNDAuNCAxMC45IDk0IDE2LjggMTUxIDE2LjggNTcuNyAwIDExMi4xLTYgMTUzLjEtMTYuOCAyMS4xLTUuNiAzNy45LTEyLjMgNTAuMS0yMCAxMS42LTcuMiAyNS40LTE5LjggMjUuNC0zNy45bC4xLTU4LjJjLjEtMS4xLjEtMi4xLjEtMyAwLTguNi0zLjEtMTcuMS05LjItMjQuOS00LjYtNi0xMS4yLTExLjktMTkuNS0xNy4yLTEyLjEtNy44LTI3LjYtMTQuOC00Ni40LTIwLjdsLTYuOS0xNTkuNWMyLjctMi41IDQuOS01LjEgNi43LTcuOGwxLTEuNC42LTEuNSAyMi4xLTUyLjFjMTIuMS04LjYgMTQuNy0xOC44IDE0LjctMjYuMVYxMzUuNnoiLz48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmMmYyZjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNNjA2LjEgNTg2LjZjLTguOSAyOC40LTk2LjkgNTAuOC0yMDUuNCA1MC44LTExNC41IDAtMjA4LjMtMjUuMS0yMDguMy01NS42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjE2LjA1MSIvPjxwYXRoIGQ9Ik01MzQuMyA1NDEuMmMwIDE5LjctNjAuOSAzMy45LTEzNC40IDMzLjloLjFjLTczLjQgMC0xMzQuNC0xNC4zLTEzNC40LTMzLjlsNi41LTE5MC43IiBzdHJva2Utd2lkdGg9IjEyLjk2Ii8+PHBhdGggZD0iTTUzNC42IDM0MS4zQzUyNS4yIDM1Ny45IDQ3Mi45IDM3MCA0MDAgMzcwaC4xYy03Mi45IDAtMTI1LjMtMTIuMS0xMzQuNy0yOC42bC0yNC41LTU0LjUiIHN0cm9rZS13aWR0aD0iMTAuOCIvPjxwYXRoIGQ9Ik01NzIuOCAyNzAuNlYxNTRoLTU3LjJ2NTAuOEg0NTR2LTQ5LjFsLTExNS42LS4xdjQ5LjJoLTYxLjZWMTU0SDIyNHYxMTYuNmMwIDIwLjEgODEuNSAzNi40IDE3NS4zIDM2LjQgOTMuNyAwIDE3My41LTE2LjIgMTczLjUtMzYuNHoiIHN0cm9rZS13aWR0aD0iMTUuMTIiLz48L2c+PC9zdmc+",
  bb: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIHdpZHRoPSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzNy44IDcwMi40Yy00MiAwLTc3LjMtMTQuOS0xMDIuMi00My0yMy0yNS45LTM1LjYtNjIuMy0zNS42LTEwMi41IDAtNTkuMiA0MS41LTczLjMgNzcuNS03OS4xbDE2LjQtMi42LTUgMTUuOGMtNi41IDIwLjUtMTAuMiA0Mi45LTEwLjIgNjEuMiAwIDU0IDI0LjQgODcuNiA2My42IDg3LjYgMjkuMiAwIDU2LjYtMjMuOCA3MC43LTYwLjItMTEuOC0yLjQtMjEuNS01LjItMjkuMS04LjQtMTMuNC01LjYtMjAuMS0xMy0yMC41LTIxLjhsLTctNTUuN3YtLjZjMC05LjEgNS42LTE1LjYgMTIuOS0yMC41LTEuNi00LjMtMy4zLTguOS01LjEtMTMuNS0xNi42LTQ0LjktMzcuMy0xMDAuOS0zNy4zLTE0My43IDAtNTAuNCAyMi4xLTk1LjQgNjIuNC0xMjYuOSAxMC45LTE1LjMgMjcuMi0zMiA0OC41LTQ5LjcgMTcuOC0xNC44IDM4LTI5LjMgNTYuOS00MC45bDUuNC0zLjIgNS40IDMuMmMzNi4xIDIyLjEgODIuNCA1OC42IDEwNS40IDkwLjcgNDAuMyAzMS41IDYyLjUgNzYuNCA2Mi41IDEyNi41IDAgNDMuMS0yMC43IDk5LjUtMzcuNSAxNDQuNy0xLjYgNC40LTIuOSA4LjYtNC40IDEyLjcgNy4yIDUgMTMuMyAxMS40IDEzLjMgMjAuNXYuNmwtNy42IDU1LjZjLS42IDEzLjctMTcuMSAyMy43LTUwIDMwLjMgMTQuMSAzNi40IDQxLjUgNjAuMiA3MC42IDYwLjIgMzkuMiAwIDYzLjUtMzMuNiA2My41LTg3LjYgMC0xOC40LTMuNy00MC43LTEwLjItNjEuMmwtNS0xNS44IDE2LjMgMi42YzI1LjMgNCA0Mi44IDEwLjkgNTUuMiAyMS43IDE1IDEzLjIgMjIuNCAzMiAyMi40IDU3LjMgMCA0MC4yLTEyLjYgNzYuNi0zNS42IDEwMi41LTI0LjggMjguMS02MC4zIDQzLTEwMi4yIDQzLTY1LjYgMC0xMTguOC00NS4xLTEzNy44LTExNS43LTggLjMtMTYuMi41LTI0LjQuNXMtMTYuNC0uMi0yNC40LS41Yy0xOC45IDcwLjctNzIuMyAxMTUuOS0xMzcuOCAxMTUuOXoiLz48cGF0aCBkPSJNNDAwIDEwNi41YzMzLjUgMjAuNSA4MC42IDU2LjcgMTAzLjIgODkuMkM1MzkuMSAyMjMuMiA1NjMgMjY0IDU2MyAzMTVjMCA0OC4zLTI4LjUgMTE3LjYtNDQuNCAxNjEuOSA5LjcgNS40IDE1LjIgMTAuMiAxNS4yIDE2LjJsLTcuMiA1NS40YzAgOS41LTIxIDE3LjktNTMuMSAyMy4xIDEzLjIgNDQuNyA0NS45IDc4LjQgODQuMiA3OC40IDQ1LjcgMCA3My45LTM4LjkgNzMuOS05Ny44IDAtMjAtNC00My4zLTEwLjctNjQuMyA0MS41IDYuNiA2OC45IDIxLjkgNjguOSA2OC45IDAgNzUtNDUuNiAxMzUuMi0xMjcuNSAxMzUuMi02MiAwLTExMy42LTQzLjYtMTI5LjktMTE2LjEtMTAuNC42LTIxLjIgMS0zMi40IDFzLTIyLS4zLTMyLjQtMWMtMTYuMyA3Mi41LTY4IDExNi4xLTEzMCAxMTYuMS04MiAwLTEyNy41LTYwLjMtMTI3LjUtMTM1LjIgMC00NyAyNy40LTYyLjQgNjguOS02OC45LTYuNiAyMS0xMC43IDQ0LjQtMTAuNyA2NC4zIDAgNTkgMjguMSA5Ny44IDczLjkgOTcuOCAzOC4zIDAgNzEuMS0zMy43IDg0LjItNzguNC0zMi4yLTUuMi01My4xLTEzLjUtNTMuMS0yM0wyNjYgNDkzYzAtNS45IDUuNS0xMC44IDE1LjItMTYuMi0xNS44LTQ0LjMtNDQuNC0xMTMuMy00NC40LTE2MS42IDAtNTEgMjMuOS05Mi4yIDU5LjctMTE5LjcgMjIuOS0zMi40IDcwLTY4LjQgMTAzLjUtODltMC0yNEwzODkuMyA4OWMtMzQgMjAuOC04MiA1Ny4xLTEwNy42IDkyLjEtNDIuMSAzMy41LTY1LjIgODAuOS02NS4yIDEzNCAwIDQ0LjcgMjEuMSAxMDEuNiAzNy45IDE0Ny4zLjkgMi4yIDEuNiA0LjMgMi40IDYuNS02IDUuNy0xMS4yIDEzLjUtMTEuMiAyNC4xdjEuM2wuMiAxLjMgNy4xIDU0LjhjLjMgNS43IDIuNyAxMy40IDEwLjYgMjAuNCA0LjIgMy44IDkuNSA2LjkgMTYuNCA5LjggNS4zIDIuMyAxMS42IDQuMyAxOC42IDYuMi01LjIgMTAuMi0xMS42IDE5LTE4LjkgMjYtOCA3LjctMjEgMTYuNy0zNy40IDE2LjctMTUuOCAwLTI4LjQtNi4zLTM3LjYtMTguNi0xMC4zLTEzLjgtMTUuNy0zNC4xLTE1LjctNTguOCAwLTE3LjQgMy42LTM4LjYgOS43LTU4LjFsOS45LTMxLjYtMzIuNyA1LjJjLTM3IDUuOC04Ni4yIDIxLjUtODYuMiA4OS4yIDAgMjEuMSAzLjIgNDEgOS41IDU5LjQgNi41IDE5IDE2LjIgMzUuNyAyOC43IDQ5LjkgMjYuOSAzMC4zIDY0LjkgNDYuNCAxMDkuOCA0Ni40IDY3LjkgMCAxMjMuNC00NC43IDE0NS41LTExNS41IDUuNS4xIDExLjEuMiAxNi44LjIgNS42IDAgMTEuMi0uMSAxNi44LS4yIDIxLjkgNzAuNyA3Ny41IDExNS41IDE0NS41IDExNS41IDQ1IDAgODIuOS0xNi4xIDEwOS44LTQ2LjQgMTIuNS0xNC4xIDIyLjEtMzAuOSAyOC43LTQ5LjkgNi4zLTE4LjQgOS41LTM4LjMgOS41LTU5LjQgMC02Ny43LTQ5LjEtODMuNC04Ni4yLTg5LjJsLTMyLjctNS4yIDkuOSAzMS42YzYuMiAxOS41IDkuNyA0MC43IDkuNyA1OC4xIDAgMjQuNi01LjQgNDQuOS0xNS43IDU4LjgtOS4yIDEyLjMtMjEuOCAxOC42LTM3LjYgMTguNi0xNi40IDAtMjkuNC05LjEtMzcuNC0xNi43LTcuMi03LTEzLjctMTUuOS0xOC45LTI2IDcuMS0xLjggMTMuMy0zLjkgMTguNy02LjIgNi44LTIuOSAxMi4yLTYuMiAxNi40LTkuOSA3LjktNy4xIDEwLjItMTQuNyAxMC42LTIwLjRsNy4xLTU0LjUuMS0xLjN2LTEuNGMwLTEwLjYtNS4yLTE4LjQtMTEuMS0yNCAuNi0xLjkgMS40LTMuOSAyLjItNS44IDE3LTQ2IDM4LTEwMy40IDM4LTE0OC4zIDAtNTIuOS0yMy4xLTEwMC4yLTY1LjItMTMzLjYtMTEuMS0xNS43LTI3LjctMzIuNi00OS4xLTUwLjQtMTguMy0xNS4yLTM4LjktMzAtNTguMS00MS45eiIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2YyZjJmMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48ZyBzdHJva2Utd2lkdGg9IjE1LjEyIj48ZyBzdHJva2UtbGluZWNhcD0icm91bmQiPjxwYXRoIGQ9Ik01MjYuNyA1NDguNWw3LjItNTUuN2MwLTE5LjctNTguOS0zNS4yLTEzMy45LTM1LjItNzUuMSAwLTEzMy45IDE1LjctMTMzLjkgMzUuMmw3LjIgNTUuNyIvPjxwYXRoIGQ9Ik0yNzMuNCA1NDguNWMwLTE1LjcgNTYuNy0yOC40IDEyNi43LTI4LjRzMTI2LjcgMTIuNyAxMjYuNyAyOC40Ii8+PHBhdGggZD0iTTE2OS44IDQ5MS4yYy0zNS4yIDYuMy01OC41IDIxLjEtNTguNSA2Ni4yIDAgNzIgMzguOCAxMjYuNyAxMDguMyAxMjYuNyA2My4zIDAgMTEzLjktNTkuNiAxMTQuOC0xNTYuMm0yOTUuNy0zNi43YzM1LjIgNi4zIDU4LjUgMjEuMSA1OC41IDY2LjIgMCA3Mi0zOC44IDEyNi43LTEwOC4zIDEyNi43LTYzLjMgMC0xMTMuOS01OS42LTExNC44LTE1Ni4yIi8+PC9nPjxwYXRoIGQ9Ik01MTguNyA0NzYuMmMxNS44LTQ0LjcgNDQuNC0xMTMuMyA0NC40LTE2MS42IDAtNTEtMjMuOS05Mi4xLTU5LjctMTE5LjctMjIuNy0zMi40LTY5LjktNjktMTAzLjItODkuNS0zMy41IDIwLjUtODAuNiA1Ny4xLTEwMy4yIDg5LjUtMzUuOSAyNy40LTU5LjcgNjguNi01OS43IDExOS43IDAgNDguMyAyOC42IDExNi45IDQ0LjQgMTYxLjYiLz48L2c+PHBhdGggZD0iTTM5OC45IDIxMS4ydjE4NC43bS02OS4xLTk0aDE0MC40IiBzdHJva2Utd2lkdGg9IjE3LjI4Ii8+PC9nPjwvc3ZnPg==",
  nb: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIHdpZHRoPSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzNy44IDYwNS45YzgtNDMgMjguOS0xNTEgNDMuMy0yMTJ2LTQwbC41LTEuNmMxMy45LTQxLjkgMzMuNi04NS41IDQ0LjEtMTA5IDEtMi4yIDEuOC00IDIuNi01LjctMTEuOS0xOS0xNS4yLTQ1LjctMTguNC02OS40LTEuMy05LjktMi41LTE5LjMtNC4yLTI3LjNsLTIuOS0xMy43IDE0IC44YzMzLjcgMS43IDY2LjEgMjIuNCA4My42IDUxLjktNS45LTIxLjYtLjktNDkuNCAxNC40LTcyLjFsNS44LTguNyA5LjQgNC44YzI3LjUgMTMuOSA0MS44IDQzLjIgNDIuNiA2OC43IDEwLjctMS4xIDIxLjItMS42IDMxLjEtMS42IDE2LjcgMCAzMiAxLjUgNDUuMyA0LjUgNTMgMTIgMTM5LjQgNTUgMjAwLjkgOTkuOWw0LjQgMy4ydjQyOC4zSDMzNC44TDM1MCA2ODljNjYuNy03OC4xIDEwMi4xLTE1MyAxMDIuMS0yMTYuOSAwLTIyLTMuOS00My43LTExLjEtNjMuNSAxLjQgMjEuMS0xIDQxLjMtNy41IDU5LjEtMTIuNiAzNC45LTQ5LjEgNTUuMy03MC44IDY0LjctMTcuNyAxNi4yLTQ2IDUxLjItNjEuMyA3NGwtMjUuOSA2Ny40LTEzOS4xLTU5LjN6Ii8+PHBhdGggZD0iTTE3Ny40IDU3OC4xYzE5LjQtMTAuOSAzMy45IDMuOCAyMi40IDI1LjJ6bTUxLjYtMjE3Yy02LjkgOS41LS42IDI5LjMgNiAzNC41IDQuNS0uNiAxNC4xLTQuNCAxOC42LThsMjEuNS0yNC45LTQuNS0zLjdjLTguNy0uMS0zMC43LS4xLTQxLjYgMi4xem05MC44LTE2MC44bC42LTIuOWMzMS4xLTUuMSA3My02IDk3LjMtNiA0NS43IDAgMTQ4IDU4LjggMjA5LjUgMTA0LjF2NTUuMWMtNDUtNDMuNS0xNDEuMi0xMTguOC0xOTYuMy0xMzUuOC0zNy4yLTExLjUtNzQuMS0xNS43LTExMS4xLTE0LjV6IiBmaWxsPSIjZjJmMmYyIi8+PC9zdmc+",
  pb: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIHdpZHRoPSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQ4OS4zIDQxOC4zYy4xLTE3IDEyLTI1LjEgNjUuMS0yOS45VjMzMGgtOTAuN2MzMi0xOS41IDUyLjgtNTMuNSA1Mi44LTkyLjkgMC02MS45LTUxLjMtMTEwLjQtMTE2LjctMTEwLjRzLTExNi43IDQ4LjUtMTE2LjcgMTEwLjRjMCAzOS40IDIwLjcgNzMuMyA1Mi44IDkyLjloLTkxLjR2NTguNGM1My43IDQuOCA2NS4yIDEyLjkgNjUuMiAyOS44IDAgNjAuNy0zNy42IDEzMS41LTExNS41IDIwMC4xbC4xIDY0YzAgMTguNiA5My4yIDMyIDIwNS4zIDMyczIwNS40LTEzLjUgMjA1LjQtMzJsLjEtNjRjLTc3LjktNjguNS0xMTUuOC0xMzkuNC0xMTUuOC0yMDB6Ii8+PHBhdGggZD0iTTIzMi4xIDYyNy4yYzAgMTMuNyA3NiAyNS43IDE2Ny42IDI1LjcgOTEuNSAwIDE2Ny40LTExIDE2Ny40LTI0LjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2YyZjJmMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMTkuNDQiLz48cGF0aCBkPSJNNDAwLjkgMTUwLjNjLTI0LS4yLTQ3LjYgOC42LTY2LjMgMjcuMy0yNi43IDI2LjgtMzIuNSA2My4yLTIwIDk1LjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2YyZjJmMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMTYuMiIvPjwvc3ZnPg==",
};

export default chessnut;
