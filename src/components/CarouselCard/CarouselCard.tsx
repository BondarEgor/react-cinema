import { Box, Card, CardMedia, SvgIcon, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { Movie } from '../../types/movieCard';

interface CarouseCard {
  movie: Movie;
}

export default function CarouselCard({ movie }: CarouseCard) {
  return (
    <>
      <Link to="">
        <Card sx={{ maxWidth: 310, maxHeight: 200 }}>
          <CardMedia>
            <img
              key={movie.id}
              src={
                movie.poster?.url ||
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EADwQAAIBAwIDBQYEBQMEAwAAAAECAwAEERIhBTFBEyJRYXEGFDKBkaEjscHwFUJS0eEkM4JicpLxB0NT/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EACgRAAICAgEEAQMFAQAAAAAAAAABAhEDIRIEMUFRExQiYQUyQlJxFf/aAAwDAQACEQMRAD8ACvrB5ouzE2kfzbZz5Ujm4M8bBY0LA8iBitJMeIlHl9wkFunxMQRSxOIMkr6l3r0GGc0jg5uKd7E5sZoZdLxsPkTTJOGsIxJGh1+Yp/w6RLoDtBimRa2U6KmTPLtRIY1LdmegthNBougCM8utcPAU2AkcLnJFPZIYJPhOK9pEYyDnFZpZprszRHFBraABwsRwaUIOeZYUh4jDcxkqfgPLSMfWtW16iA9pypHxi5guUxFqz1Ao8E58vuQrPHEl9rozbamb1ouGwLKM0ZbWabNoPzpnbwDZVGDT8uWuwvDj5CU8JzXP4U4BCVqUtmUAsuRXpEjUZbSB51lXUyNf08aMXLwmYZYnJ8Ko/h8urGitjKYVUSDHyqyFI9iVUhvGm/UPyhLxU+5hYrd2fBGKYwcKMil2fSo+9bKPhlvcttGpNFpwmJV06Bt4UM+qXgOOFvuYaHhjSd5/Sj7f2aV+88hEZ6LWkk4Yq7ohr0EZhyGpUuol4YyOGK00Irf2XiE+szMVHRqrvvZzQ+qFwU6gVpl0DevSd8bUCz5LtsY+nxtHz+8sZLc4ZdqXyLg4xWw47GynUFQbYyedZiSLO9dTBLnGznT+ydAqO6cmq1Z5F3zU1jA+LlU+yB5LtT+KBcokPeHI+Kue9P8A1V1oaj2TULgirR9steJPCojZNSZwceFCcVsLC+BkkjjQjcYXGfWqY20k4JzUjLO6lQnWvOxbT0ztySkqasVwWkMLkaSFOwHWpe7gEhdWPOj4bSaQ5kUDemMFhGi5LZPhTJZn7FxwR9Ca3tsk4+KoT2sjAhFJ8a0ghB+FduVUva6tzsM0r5djfi1RheKieEKogKqetLIY5J50i0EajjlX0qWFHAUoDjqarFrHqz2SZ8dNa49YoqqMM/09znbZnLDhrPbkMMAchRNrw4rLiT4c1okgTFSa3ONj3ayyzuTNsMCghc9rCI9I2HQ0LD7MQ30gSa5YZbOAOY8KbNDpqKMVdcc6FTl4YcoRl+5Cfi3sXcxuzcMmVoyB+Gx5fOkC8Lv7eV1kVtslt+WP8V9APEGtrSR7h9MXLJGcb4/M1m2ukl95nlhkmR8BdZ7mRq6f8z9vChn+oywrjLYr/nRzPlG0U204sxifmpZdueQMt9jV63BmAaJww5g5pWn+uja4PbBI1eaRwhKkshUgN6n7Uo4FLdpNMlnG0kF/quIYo0DFGIBIyNxnJ+lBHqnPbQ19Jw0maztpTseZrjEgYK5NIfZrjy31zPY3On3yB2UhRsQDgfOtLLb4Xf4utM+Swfj49xdM/PHOgbqeaNcK2CaaS2kmklCNXSs5xKK7juMOGLHlitvTpSMHUzcFqwa9lmkAEhyKqhsjOhKncb48asht5ZrlY9J1ZG5HKtHwvhpSRxJHqTPdJ2rdPJHEtHPx455ZWY+WFgSGTBrix90VruLcKLFmjjLs22R0oVPZ27aAFYGZzzoo9VBxTsk+nyxfGjOmLA3qSwFhkLWwsvZmJQpu2ySMheZzTJOFRlci2z5haVk62K0huPosktsPEPSrEg00RmvZri2d+iAFSBw1Rd8DnVQmzVFhLuP6sVUzsdhVLEE6icVEXCBsFqhAliQN6rZ6iZA/LcVA7VLIWKxbYUTCWVQGoWDnk8qNVloWyEnKlPhoOQqoLNhVHMnbHnRjyxgZJAA23NZ/i1y12/ukBQsy6tOrHPVpJP8AxJ9Bmgnk4xvyEo8pVeiV9dx3ACO1q0I3EeslpD6D97Up4beRLbv219AB2jpoEep1AONO/hkVG2sznWukvBIwAXbOksuc9R1pJwmSQXN4txBIXMm4Ef8ANvq0kdO6K5UuU+TkzowUYOKSDk4mDa3tlDxTuSoYir22STjOBt50q4DNLepHIloWFtGytPZS97UScErkEDBO2etSjVXuGAiKssu5ZT+GOmfkazvs9IF4hNDdSpCzFnZuWSOnpzrThvixWVR5IlPc3fBPaFLpYcktmRXiZAG2yN+fQ/OvonC/am04rcCzdHt7luStyf0rF8Rsr+/tJZjM8iBMxszFhrzjb1H5VXBxMSSLHdvd2lzZ4Gt0EgzsAeWqtakzM4o+qw2ulsnnU5IEZ8lckUn4T7RWt9ZqfeBJMm0g0lWJ8dPMZo2w41bXEskTI0TLjHaHGr0pin+RLh+AxYUZ9QjAwMZA3roTG1X9ooBoeWQNjTzFMtsCkux7QFYFl2oyKQtGUj2xQBldtqtgZl3qykFQWpLapTz3pmnZIiqOgpSZXrwmahew00gZ7lkVdeldXw5bnVLyOzc8GvmHtb2y8QjgM8zBYsNqJUF9ZOw6dDTD2b9p5reZLXiMrSREYR25xnluetMWJuNg81dG8kk8WOapabSdjmohtaBgwceK7iqmGRSwib3ZO1VAl2251U+M461O1BSTW52HSo3RFsMgkeLGqipbhFQs2AoGTnoPGsRx72muHdxw7KQwvh5QN2/tWbfiF/xE5kllYKuNmwTk0tsOmb+f2mCysllbm4UKe9yy3z6Umf2q4nOVhU9mzr3WVdwetA21wzWhhjVyOTk8waCv+3tUtn2SQg6QNj9KRLJ91Do46Vs080sklm2ieSSePEjxB8qQFxjfn6+NH+z3GZpg9ymhu2i065RjQ67fXGfoayXDuLW4Ea3cLBGOiWRH5IfL71fwN3ayuYEk7OGOdJiQ2x/6foD9aRkc0tjccYtj7j19LdpFOyFbaIAogTC7bEnyB386CtoJVtrudWAgkILESmPBB6Lz5DfxoOXilxPK9sC3u4kCGPnl2GBj1Jx8qZPA/B0jWXiJfMf+yBzfPeyTv03/AO3akq0tj6TehFeGSC0mM0rKs0ofvcyQpG3l5+NZq7jlspobqJ4iwAOF5hum3pWovewmkSWCR2QbIrryxn7b1mOOjsuJSrA66JAjvoXBB0jI+u/zp+B7FZ9I1HAfam6eGeC3tYDNcQmSFFQBUdeZ8gR0rN8aMqXXvzH/AFJYO+rO+em/yovg8Qs47KadiFZmCMHwBk4GfAZ+tR9o/wAS8mVp3kBUkvKBkkeHhvyFOT+7YhrWhx7O8QjmvVuOHRZvXUL2RUDcbfTen0nD5IbCS6lkRZ411/hEsGYdMHlXzn2em7DjFlOx0iOZdfeIyM19I4y/C7W+nE17IZjGZNCLqQZ+EDH96OSoCLsNtOPGbuywyRd3UruMLIPFc0YkwGCWGDyya+UXl/c21rZNbXIM8M0pUK2WGScbH6VquJSXtvClx3NGMo5wCxwM70XPigOHJmzWVedXRvvtXz+K544kLM0iwRdXkcHfwHXNMOAceee5azupxIXUsjkjw3Hn4/WijmT0VLC1s3IOQK7SW149ZyX0to0oWSNmGsnusB4H0BPyplHd2s6CSOaIqeR1ijsCj5Vx29l47xa6vUXUjyCGFdi23QeZIJ8s4qq74fJEVDBWIGTg6gNqh7NQdvxGZ7kqsMcUjdofEISSuDkn5/SnKcSaykaWPtljmJUxq+DKpOojfkM58PLatKyfHqhbhy2AcD4lLw+8j7WR/dnBDpkkDPIitbwPiX8c7ZbdVgMQ1fivpBGcbUBDc8Hu7G6vOJQPDcOwdShBUFifDfxO/h9RVu14JqW2ihvHk76uH3A8PKgySg1ZIcroc8TuUsG/GdWxjdGDZzyG1I+K8TlldYRMYVIGrfBYnpWb4rxy9nnkhm0aFTSmhcafIY9cUv4wHm4nDbhviRSq+ZznNZpu4+jTBU67jt0Ek/YQk6MZmwS2/wC/Cibu1U20b2gZOxXvd3HP8zU+DrFYr2aAsmDlgcE0VNeWiWhhka41McNl1YbnoMbVm57oc46s97LTQt7x74w0xqJMgZOR8vSruN2tk92yPEPwe8SJsb5HU7nrmkFjcSWPE3SAtpl1RrqOAeoJx4YppE5tJGkuJY5U3eQkaum/WqyOpqgsbuOxJfo0FzIocONR1EEEn6U79nokmtbqTtAAUhZQw5htWT9vvWIvLoPxKae3DLGzkqvXHhU4OJX1uv4MsqxAANjkMdKbLHyQpT4s3vC44o2bilx3e2Y+6Rnm+k/HjwB5eYrj3bTXjT3GZCRlyRyAJxjz51noL6/muopSvbMuDp2+HbkfQU8fCNghTr3K6uRxsP351myY2tUaceRNXYJJIzzSBcRu0bY3xpAPTzO1I5nkvA85GrstIZ/tv86ecRdoIohChlDatShRldsH9TQkVup4SiRsWjuH1O2BkEfCPuTRwjxAnPkD3C9jw5S2cOcqRz/e1VGP3yzWWdjq5Eg9fPNESt71YRINpEAV2YcyP8YqcEjyW6RMF0Rd1dsYq3fcia7CmUJDJo0hlH8wrWrcGK2SKFHKgBg6pkNt59elZm7yBuMHO4I3Naj2T41aJYuOKRvOIHXs4oXCZ9TRStpAKlIy97cCXikcsigSCTLMuxYDp61rksLO9Zke6dg28KSf/Wu3MA786xnHbxW4rcvBGY4yxZEBzgHkK00LXXDeHRrPCjF8biZD3TuM4J++KuV0gVVsKnjhjmDGVmWGTSERhjHU5PoaGhu7NJ5pGYiVBlEJ2bOzbc84PTzoZ+KSNazQC1SODSCSmWBxzJJzvz/Sr1s0jnNlNLDPKwDR9ixkZdtwMZzsc7eB8KBBHZnsXd1aWUYUPEsKhVyAcg/M/emNnfxe6xm2ewhjKjEcjacem24PPPnSyEk200UEi9ta/wC2JFYMQSOWAc58Dt+VUpxHixLFVjkUtlSZV2B361abKaB4YFhdnYEAghsDoRpxkb9fOozrdRTQuUFxawOH7J3GANuYJFShmuIxqmCYU515xq/49aoueIXMuIyE0DJbu/F54rrZnFRMUE+Wwjid9d3NyIERI4WTIZRjSAdsfb71TDIGkaCLIZRuc4qlY5GHazSay47uls4z0+VFWtqY4slSSxy2+2fWubJOSNipdhdf20T8TQKCNGlnGdgBvzoi2SO64mL+Q6kRcIrAjJ8alFaRvNcTumFkXTjPxHP2+VHaBGq9iApxzG/0qsk/CJFasuWWMYQZDk57xG9QuEVmMko2XA2Y4/KpXGskY+PGx01O1aVImR5U142DJ+tZ4oNz8AlwUn7JogqMpypXfO9MLnCEwytqMildhy25Ec6WvHMJFDSZye6N+fyrRX1k1/aJIJHW4Kg6ZJAQ2PTcHntTXG6YKkfOJYFS4KIQyqSAV5YpzwSB0t3MgTsnOVBG56Uwl4Fbxy5kuFLj4l3x6ZrXeyMPsbEYW4vPcPcxkfgyREQg9NlyW/5bHwrXCcFtsTkjJuqMtD7J8XazlvLG3uY4Ih2kskq6Iyo3wCxGR/256VZLOjuwWTGRuM749fHfc1ufb7jtzx6F7DhiiS1WQhljkyZhuNx4Y/l89/L5zbTywpNBPBNFchw6xYCYXfOQd+o/zWbLNZHaGQXxrYXGJ2lV4iAyt3S0qtp8fWgJIZOHzF4427GRjhSm2x5jNNbO7spBm5hbvDGVZTpPQ7AbHNSuTbF2a2YCQ4xqjYYHXBUnp5UEZLsW3exdGNSSGLU0bDWuOjdftmhIH1Fznukcj4ij+EW6ycajsUuiq3D6A8asygnxGA2f3mo8Ws5+E8TvbC4t/d9CYDEHvnqQd80ziyKSZSk1z7vLBHErI3xkLk4oGzQwPcwYwuA+eZ9MUQsiAIjIGTTgkHBrvDrYXVykCxSMWRssgJIUcyfLlvVWvJdO9CTikaM6SRgtkcx18Kd++Ga2WzZwqjBHdG3jmq47FRC4uJIO65RV21P545gYP1q11JXtLlcsNscgAOVXJpopRaKoJGTXGsqLCe8daDDEfXxNE6TboZY1IlHeikIzqPmfQnbyqllVlOVweYJ3GPAVFGwE3K4we5yH2oEW0V+8xpdM34rIyfynDYP9tqY2vE5bWMxrczoM5wgyKXsrKpDD4t9yNvSuSzSsVzhsKBkiroolAA8HaDT3MkajnUP2RXpcI6RpIC0h0nbpvTCyktVkleWOMFQQhb4QN9sDruN68sMAuEnncK++nTywfPG1Pn1C5Gd0kiMVsZpRvpiiXSurbJHX9/pUuxLape92edOvOzeOKO7PhzXESawlsikkOxIIHIH18KrvntpVQW4LqeRLYC+Q25c6yvNy0hkmqFd9dImnSUDAbLz0D9TzrsEgggDZWQndIyveHmTV0McCx5WONX/mJ3J9K6tk8shJQ+Q/vU0hLk/ZC0v5GuMnTo3z3s4oi6vyVCqqgHnkY+deaxZFI05x1QfvFBzWV7JPojVI4yN2Yhm+lHGcG/SK5yDrSG4vpRHaq0pxh5OmPDPQedGmd7FXhibvL3WZOXyrtrLNZ2Hu9uJNed3xz9etCNJLl3eB3wMdTv40mU7euw5TSWu5O3SEur3kwjVjsp5mheJ3UMRZIZUdGbfJztjlUTZTEpKY8E4zqx+VVzWLbk6c88aeVFyh5ZHlZdw/iXayorNEFC40gAY2xjz33oXieZFAha4DxnHcOxzyI6iotwrMaY1a1OQR16dflRMMVwsoTssqchmbw6YxVxlFbiC8raoXWk1wFxKr7YDZTmaZKGlUspBY9cGrHtgxD5VCQQRjf61Q1soY4IPPvLnNBKak7RSm0D3EQO5VeWxo2Djt/wBgIbp/e41XA947xUeGrnVYLZw4DKfAfrUltY3Pdzhhjnmmwm0Faewft4pJwFRVXVq72foccxW49i/Za/4sWvbWa1gjlUxSzHvMFzuFGc589qybWSqQFJG2OVDCCSKQlXK5547ufU1cmm7GRyOj6F7Y/wDxkbaOO64PJJcaB+IJ2Gr1BAA+XKsZfWM8ZS1mjMbxjvAnJ3FStvaHjNmdcHF+IL3dODMXUD0bI+1ek43c3U6z3Gi4cbM2gIT/AOO1DKV9gozXZsleQcPks7YWKdlMsQSWJtwWH8yk8wfA7g+VKmtnT8XGQDvqPPYUbxG996hCQK8ByGx5+tU210xAW6TbPx9R61IvVhOSugIykjddGfDfNcwKbXkNtJEcTDWWyANxypetuoGOvlU5AukSt7S2lRZNbadQDd7AJO39vnmpwixYLLDcOI8Z7u2ojcj5lvoRWWi4jNqCjRh86lK5B5n9a4Lm5BIOMSEgrp2zjw+e1T6aXsRo2xjgfK9uAxfSQW+Ft9h5czUxABEypMrOAMqxxzOMZ+RrMzXfFLczF17z6sMNsEkHV+lVG44lPaidpR2d0+DjYjSc/maD4JeJE0a5bT8GOZuyCBT3s7nwqwWKPpftjoXvfF8WB6Vi14hdTiSJmI7PAAB9B+lFQX/E4rWZW+CEgLgc/H7VU+myV+4u0a02usYiQBgCWJOy+tQ93vyFf8AIw7q569TWX/jHEe1uoz3EYCRxjvfI0RNxq493VothgIo6bDn60LwZV6J9tmm9yuWbLMGOMjB8fyqgw3DKp70eCdWwPp+/Kkv8S4kFd1fQix5ZiPLNE8N9pL2WO3kYqzSziPAGNILY/I0uWHKt0XUWxgNSrpV17Qg6Sen9q9byyKZTcyJ3QCVVdwT59aGb2mmga4jkijBic9oAvPc4+wHp86sb2ms0A7e2lKmMNnHMZ2OPmKV8eT+oTjH2XlzEqFwpyxydOwxhjk+lVmcxgxSLFqwSxGwAO36j60THxawuLZW94jLSF0QMcalBwfnn9KtS7sLhmjZoME6AQMZYAnb5Dn5UtclpxYXxxYKk6IqF4BpO6jw3P3xiovMjDvWiqBuMnGD4f5o3360fQSiqzDUu3lk/nVrzR9tH/tAHKnHpzq1KX9SfGgFRrZl93y2cAgbD+9XQQppz2ZHLG2KMZ2fThsAg4x1Pj9qFLkPIuScjIJ6UfKdl/GkQaJZSSI8BOtcmgTYBDnrirJ43aIoSyrgAsDzHhVYQzFgpZdLZ38CKLlJdy+ANJaKxwFxg1U9ukSkgDlnlTb3Zhyk571W1uIkVCzEswGTU+evJPjFAijAxqPltyrwt4icFs+NGe9QQS3CMR/pwTg8+m9Vz8Tt4lvFfQrQEKSfArz+uaJZpulRXBAFpBHJw+GeR9KyIGLE+IqUS2pBEb6lB5/IGlFlxAHgVzG7nMGnSPr/akUHEpYlIzzOeXkP7Vo4ZJWVcUetR+Ou2e6cU+tIQL2M6MqHYjHiBnH0pvaezEcTh3G4HjTO34PBEc98nnzHPlXUy4nxMMOoxP+SEFxifhsGsjVL3nOfLA/OgZZEj4doYq0sTgRFRgeOftWsk4NAYyul8FNPxbjwxVMns7YyLhhJnG3e5Vnx4aVOLGSz4q1JGTs5tEpuGgDFgVZsYBNXPxIi3NumFw5J881sDwax7JEAYqgwFzt61QPZvh4JIjYnxJrQ4RfdCvqIL+RkIJ399M7EuCuk5+3yom1GF0yKOyOTjw/e1a2LgFoM4i39aJHA4CFzGu1W4xrsT5k33MZHeOLK4iZSQzg5PLAGKhaXEllw1wjDXLJqwN9Pw4r6GljHEmhFhAHhGKibSMzK50a1HMIBt9Kyzj6iNWWPs+eapJ5e0W3cO2ppToI7x/wDQqqTtbhuykjbRHCVXAO/LA+1fTSitldZG/gK5HZWw3K5PnRR14I8ikfKm4bdynCW7Z2x4D94FGQ8F4swjcYQDOBqwd+dfUewtlXHZL9Kh2Nv0jQCic/wS/TPnEfBuKdsFlYu+gKGRs6QP1ppD7PcQlIM0xUkk5zyOa28awqO6APQVZ2iDY4pUp+kMj/pnrThVxBHEombCkZ8x4Uz90iVl1ZAJxn1o3t0BoDi12E91wpIMwGazyhydjlIOHD0nVl7QKPFjjFAzrHA7rGAx2A8+lGi6B+JNj1qMlvBNuZSmf6qy5YUNi7FSyuzLo5EnV6Ch+Oz9hAHRQWUgj05ZptFwxbddUUqsu+7Gsp7ZXDkL2e43BrPDHymkgpaRkOJcRkmurp1c4lXTsfMH9KBnvZZXlJckSY1eeKqkbMhPjVdduMEl2MjkSWRlDKGIU/EPGq813FcxR0Q+x9sxOdBFd7Zv6aXtdsxyarN01deR5hdJP2M2nbG21UtO3WgTdPjY1RJdP4ilphPoZV3GXbE8jUhM3jSb3hyedWJM2OdVKSJDoZex1HO//wCmKvNyw5vmkSynqTU2kOM5NZ3JGqHR15G/vWT8Zz5VTFdqb9wWfAQb52zvS23nRwSDnzqr3iOG6aRnGHVQNvM0jIzXj6dLyPXuFBJzvUo7rzpT24JG+xo2EAn9+FAzQsSQwNwdPOg5bzDEZqyUaVNJ55e+aFKxjjSGK3xzgZq33skUnic5ojtMDnVOJSDWumG/SlfHLsM0Aecx6CGwADvmvCctIy9AedBe0fZqI5CiFsfEXwcg7bdaiiEPYbxjGmCxwP5ufzq1pJJ1JRjtSKxlRbYIjA75Yg53praSgAgHnQTihsWQ7S5Q6DIQGPKs7xuDMh1SsQ39RrS3Ui60xuQN6QcRxM/zpcIcZXQUm2jLXNk4YaNx0xQjxsM5G3jTe5Z4JmB70fh4UPMAACu6nlmtggXomQc8q4E50SxAbGKiQM0LZLN4T061wnbJqmSUKpYjOBkUuW/1FVzjlmt8pGOMUNWNDysAcZqzVkZzQV1LH28Yy2rfkdvzpbewmifaBWAJ3PKiI32pRLIfeo8cqOR/Oqk7JGIbrA5muXEuiFm8ATQNzcBdKg97UNq5xGR/dWdGwANzjNKsZRPgkpEDAsc5JOds+VU38haYMF0aWUOpU770Hwsg2h1DJPwlhk5/flUJ5C7LraNXXHJSuaBhLQ/Ew0jfYAfvH750ysLggZJAxudQ8P8ABrOQykhULEjGCTRdvcFNmGDnbfI6H9+tNrRE9mmnlHZYKsccz18/0pHI+rf5moXF3iNtD4JHXlqxsf1oSC47R0G267gdD4Ulqhl2MI3wa7LMADuKFEmOtBcRvCjIq756bVCnou4bctJdSByNzkb5zQnHbl53BLDRGNxq++KospWS6kAOkHnkg0DcOjtJoIOT8W5qiWOOGzhSiK2VPyptDcjnzPlWRgmMbDS2kcicb044fPqj3JIXffrQdw4yG0l72jOMgFRiliy9oqu3I0HJdIs82dIyuM4qmKbMCsp2wRipQVl/Eog3eXnS+Ta33HpRkt3GLdVxqOnn50sebMRTzokBIrz417Ne2xzrm1UCameTELnP8v0pHHIO1DHONskGi7ufEBC9dqVnZTvWjJPYpRNP2y9kzqdh1aks8zyIjMVDEbYqPvH+l0knPh40KX3xtipORSQdrzcRbE4HMmiGuezMhB2C8sUpMxDAgnYY3rjXBbbPPGaHloPiGzXBaUYO+AaJvptVgu+SwGdqUajqzV0s2YYt91HKgssL4bMqQsDKI9PPYb0NdyK8oIIbfZsc65ZOVckDHj51XM+pyzYznpVNkoaQyOYxr04q8E5BU9KWW1y2koRt40Y0qoqnPMYFGpaJQVJKNDAMOe2/lQUUwEqZ1EYz3TzNDvcnHdJzk75qpZSp1lt/Sguwh/2meR3pXxFwZlwwz6b1RFfshLYXc7jwqmSbtH18wT9KplPZMSaZS0gORn4TiqdQyT3hnpmoMTkjrUQd6ohYDvV0d1JECFO1DBt66SCPOp5IdmlLtqY5PlUElcYBO3OvED0Nd0MBk8j1FFWizxJIxmuYwK8DUlwTvURCB5V0YxXnwCRXgKoh/9k='
              }
              loading="lazy"
              alt="example"
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            />
          </CardMedia>
        </Card>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 1,
            paddingRight: 2,
            justifyItems: 'end',
          }}
        >
          <div>
            <Typography fontWeight={500}>{movie.name}</Typography>
          </div>

          <div className="flex items-center gap-5">
            <Typography variant="body2" fontWeight={300}>
              {movie.year}
            </Typography>
            <SvgIcon>
              <StarIcon color="warning" />
            </SvgIcon>
            <Typography fontWeight={300}>{movie.rating.imdb}</Typography>
          </div>
        </Box>
      </Link>
    </>
  );
}
