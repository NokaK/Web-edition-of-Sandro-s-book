let rowContainer = document.getElementById('row-1');
let secondaryBackground = document.getElementById('secondary-background-image');
let shexvedraLeviatantan = document.getElementById('shexvedra-leviatantan');
let shushisQila = document.getElementById('shushis-qila');
let opisisAmaoeba = document.getElementById('opisis-amaoeba');
let cifruliSamotxe = document.getElementById('cifruli-samotxe');
let khelovnuriInteleqti = document.getElementById('khelovnuri-inteleqti');
let naxatebitSaubari = document.getElementById('naxatebit-saubari');
let jadoqari = document.getElementById('jadoqari');
let cheshmaritiMaswavlebeli = document.getElementById(
  'cheshmariti-maswavlebeli'
);
let qaosidanKosmosamde = document.getElementById('qaosidan-kosmosamde');
let seqsualuriProfesia = document.getElementById('yvelaze-seqsualuri-profesia');

let itemsBackgroundImages = [
  secondaryBackground,
  shexvedraLeviatantan,
  shushisQila,
  opisisAmaoeba,
  cifruliSamotxe,
  khelovnuriInteleqti,
  naxatebitSaubari,
  jadoqari,
  cheshmaritiMaswavlebeli,
  qaosidanKosmosamde,
  seqsualuriProfesia,
];

const items = [
  {
    id: 0,
    title: 'წინასიტყვაობა',
    svg: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="72"
    height="72"
    viewBox="0 0 72 72"
  >
    <g
      id="prophecy"
      fill="none"
      stroke="#707070"
      stroke-width="1"
    >
      <circle cx="36" cy="36" r="36" stroke="none" />
      <circle cx="36" cy="36" r="35.5" fill="none" />
    </g>
  </svg>`,
    content: '',
  },
  {
    id: 1,
    title: 'შეხვედრა ლევიათანთან',
    svg: `<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    width="72"
    height="72"
    viewBox="0 0 24 24"
  >
    <path
      d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z"
    />
  </svg>`,
    content: '',
    audio: './media/mp3/englishtest.mp3',
  },
  {
    id: 2,
    title: 'შუშის ქილა',
    svg: `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="49"
    height="60.308"
    viewBox="0 0 49 60.308"
  >
    <defs>
      <pattern
        id="glass-jug"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 91 112"
      >
        <image
          width="91"
          height="112"
          xlink:href="data:image/png;base64,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"
        />
      </pattern>
    </defs>
    <rect
      id="glass-jug"
      width="49"
      height="60.308"
      rx="9"
      fill="url(#glass-jug)"
    />
  </svg>`,
    content: '',
    audio: '../media/mp3/universe.mp3',
  },
  {
    id: 3,
    title: 'ქაოსიდან კოსმოსამდე',
    svg: `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="50"
    height="52"
    viewBox="0 0 50 52"
  >
    <defs>
      <pattern
        id="cross"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 80 83"
      >
        <image
          width="80"
          height="83"
          xlink:href="data:image/png;base64,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"
        />
      </pattern>
    </defs>
    <rect
      id="cross"
      width="50"
      height="52"
      fill="url(#cross)"
    />
  </svg>`,
    content: '',
    audio: './media/mp3/englishtest.mp3',
  },
  {
    id: 4,
    title: 'ოფისების',
    svg: `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="63"
    height="49"
    viewBox="0 0 63 49"
  >
    <defs>
      <pattern
        id="eye"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 127 99"
      >
        <image
          width="127"
          height="99"
          xlink:href="data:image/png;base64,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"
        />
      </pattern>
    </defs>
    <rect id="eye" width="63" height="49" fill="url(#eye)" />
  </svg>`,
    content: '',
    audio: './media/mp3/englishtest.mp3',
  },
  {
    id: 5,
    title: 'ციფრული სამოთხე',
    svg: `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="70.695"
    height="43"
    viewBox="0 0 70.695 43"
  >
    <image
      id="digital-heaven"
      width="70.695"
      height="43"
      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAAA7CAYAAABrE+QyAAAACXBIWXMAAAsSAAALEgHS3X78AAADfUlEQVR4nO2c7ZHaMBCGFU/+h1QQXwVHKgjpwKkgpAPSAemAVBDTwV0Fx1UQU0GggpgKlFlnxQghgyTrw6B9ZjQ3cwyspNdafXi1bzjnjDBmiqXEL+wYYw0WZ946fHEiVWaCFYLSSpURFdsF1BfsV5J9wQbtbjzanzPGloyxDz2f7xljT4yxlZNNGAkGZcI5X3DOG25Hg98rDe1cK1CPJed8Z1gLsD8faG9j2eYav2dsx7TRrWVFdKxsK6eUakA9QLSZpb2phdgqLdZ3sAgzT50v06Kotk9j7cm+6VM6cRj1OlZDRJh7anQfO8MnxVdnyDQGQjx5tFe7iDDzWIFrgL/tmy9CCCBo0d3o7C4C2FvYiuDqB4ew1DydvlxQH63GZhnABQv6RD8TIbQbuoTsomLVQ3VNtishW1tGIoQa/jZsAj6NOsTkGcINqWiXy/KOGTYkv4bsaG6Yb7jRehe4CXtlY9khiwA73Mc76tixAoLXct0K/DsjAaIxVw0JEc4+IILxSXVJQoSK+jwqJ/1doCsKPSERp5x4HiECEZdH2SUVeC5PxKeSRThbtxJROLok2CfQ+810PMCbuGKstcuEziWRCGnpFkXkjtJygGAJEiE978kdpWcKImxz74XUFBi0RSSkwEg1IrEIg+IoCT8i0EhIjJgTXrPuhbS0Yon6lGsPjIBGvOiHEPe/ufdGArroCzESwCWts2r+OOgWRfKOuR5xZe+VblEki7ChCTo6nQjqnTU4Wn3JovnpOUbjqQd4NBricVyR6m5vgjp/7rPdo+KjbmIWwO3DH1l3T3i28nFR3/uEJR1xB2Ul//ily+QQj/T7pps6Ts7C4y+9WWswjJvwy0L9NZO0CrCJ+0pCeOFVF3ZqmtuCLpD44UGXdsH0Rf+MJurBfO/Le2GT5WWCmzkaEfZo3ZDAJuSlpRHhxPbaJRzbuCMSwo4DRl9fjGhxCf4SQjxHaMQtc8B+uhpI4RqB1+IQ+5lNl9phLADzEJUNG48vaJT4z9ZGAB8iMDySLen1aMezrQDM4/2EFiegz5m+jzigR6hcwkpDZYOcoquqMrieu8a2Osf0xkjJWeEQvbfUDWs88h+ccTJFXlQhSIkj5paE2eOBZu0z3ehYktNOJVFKqfTlIY3FAY9qRAkSPH0LGYJFMlxATUQrEuS6IifUFYgAafh/+LsbjLF/+prEQ9yRPe0AAAAASUVORK5CYII="
    />
  </svg>`,
    content: '',
    audio: './media/mp3/englishtest.mp3',
  },
  {
    id: 6,
    title: 'ყველაზე სექსუალური პროფესია',
    svg: `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="78"
    height="49"
    viewBox="0 0 78 49"
  >
    <defs>
      <pattern
        id="snake"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 125 79"
      >
        <image
          width="125"
          height="79"
          xlink:href="data:image/png;base64,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"
        />
      </pattern>
    </defs>
    <rect
      id="snake"
      width="78"
      height="49"
      fill="url(#snake)"
    />
  </svg>`,
    content: '',
    audio: './media/mp3/englishtest.mp3',
  },
  {
    id: 7,
    title: 'ხელოვნური ინტელექტი',
    svg: `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="43"
    height="64"
    viewBox="0 0 43 64"
  >
    <defs>
      <pattern
        id="ai-face"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 69 102"
      >
        <image
          width="69"
          height="102"
          xlink:href="data:image/png;base64,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"
        />
      </pattern>
    </defs>
    <rect
      id="ai-face"
      width="43"
      height="64"
      fill="url(#ai-face)"
    />
  </svg>`,
    content: '',
    audio: './media/mp3/englishtest.mp3',
  },
  {
    id: 8,
    title: 'ნახატებით საუბარი',
    svg: `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="44"
    viewBox="0 0 64 44"
  >
    <defs>
      <pattern
        id="cassette"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 130 89"
      >
        <image
          width="130"
          height="89"
          xlink:href="data:image/png;base64,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"
        />
      </pattern>
    </defs>
    <rect
      id="cassette"
      width="64"
      height="44"
      fill="url(#cassette)"
    />
  </svg>`,
    content: '',
    audio: './media/mp3/englishtest.mp3',
  },
  {
    id: 9,
    title: 'ჯადოქარი',
    svg: `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="45"
    height="58"
    viewBox="0 0 45 58"
  >
    <defs>
      <pattern
        id="witch"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 79 102"
      >
        <image
          width="79"
          height="102"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABmCAYAAACKl8x4AAAACXBIWXMAAAsSAAALEgHS3X78AAAFNUlEQVR4nO1d7XHaQBBde/wfdWClAuMKQioIqcByB04FwRUkrsCiguAOUAWBDqADqICMmD3N+SyJE7e3uzJ6Mxr+aO6kp7u9/ebqcDiAIowBILF+S2zwWgHATtPD3gjPnwLAFK+vHvevAeAPACw0ECm18jK8fAirwx4AZkikGLjJm+IL3xKN94YfQWQVcpFXbs88YKW1odzKEwkCrxnmyFDYxyCuxB0ALCON3YrY5JVb9BUARpHnuZOQfzG3bblNH2IN3oB7XOUsiLXyJIgD7tUXY+U9AcBv6kE74Asq1dFBvfLGwsQBfjwWUJOXcz14CyZcE1GSl+GpJw22Z6Akb0Y4VihYVh8VeWNCk6s3oCJvquyFWXQ9KvLYhLQnWOxcKvJSonF6BSryNMm7LddEVOTticahAJuHhYo8NmPcA2yKOhV5LLakB4o+rrwF0TihYFXUKb0qOwanZxteOJ0CQGyeSUayCm7iIII/byXgHPg0AaCMWW2ZSxEHEchb4ctwEPgsGbOFiAGgMaoMMQ4QI9/EdctYAaAVEjgnHLPMDviGK1uFUs6RMZDi9voVMMYPRbpkBY6MgQ0qr/cBY4wJn4cMHOQZhGy1xOMednCSFwKVK48zuTGEgBSvGA6I9IQzd9M0r++BYae5nutynxJYH2s8OBpfyIL9zInz8c7J2Cpw7tzolk3kmVTXsZJYrCZU5qBLHnXm5mfFz5InW+aVbP69dFY8cRQH9mnL7tLpMRYueSp1KYXYGp3VJk+d+aMUmXksm7xcWQhRI17sAFPdaTscGvXYu6LNNc8WyO6Ajxi5h2qdklwqxv8G8hpRucdc8hI0eyRDiNqxNbawu22zgbiTqKwvl7xB1zuNKgvLJU9VMbBSVIeGS17Omd/WQ+xtV1jdysv6/oYRMUIl+egbdG3bmZJCFM0YGY6MqhIzSP1ZcW9W3mIgrjOSa3SCDp7j7tj1JfSoDaX9v7oZdLtOKKy+LtWBIZGUKI29FcZsQ2NHIfu0vTRPShFa9mWiZyWrj9iJQgpbp82RCVTHaikSnKZmhx6NcjwTOH3nLZZNgvZkSIpaHYJlfVPGQIpLeoxXGpHQrWfhX0a8M55D6zaaEn02DWaa26KNYmv5Ru1y/KASLUdq0TVLysgJt0QpJL20S7nTgpC8YJmnQUnuInsoY8vBMq+PFoYaf2MfydNSYamCPKn+BMGl/ZfsGLhI8qgifBdJHpUDI1hcaCBPqkzgNnRuDeR12YbU/VuCzLO+bVtq8r6HhFqlO3SDghSPV8xLzBusjl2TKUdV9Rg6yJXnfZLJl2vc5pWJSLFtOTMMJGvQ7vDDVXIyhDzjpBTtzy6AKtGnSeZNnF8DU+RWEkcZMJpIddk+A1VygE1egqtIjbNRKd7MY9nkLYciPS98ODDSgThvVKLMJm+AHx5MfMeQJ51yobIMvgUlgRND3krYve1rZWgieWLreZLten1d66qy9W3yVsQdeLpATVyiAzY2eemg43njmGFlkyeZBd+3HMGppsxQTd1uT+HRmJIayOtyykuTPLdzeDRUenchRHp7T211yV15El+2izdFmjxTAfSuZDSN/MdubeiSvKNBNo7M4WrImwkVsRQddbylkiYS75rSSDkGzgn9aWhhcvzgkqfty5ne45nw6tu7XhVuF/g8oP3SRrB10/5dX+Yy9IhXfoiP3eFweLLmDLmmOB4HdshPYj+vG7c1fxOdNrh/zgn8rPGUXEb4O+kETz7fv7X2RYH3LfHZa+UsZatfu1NiXyJh5wMA/gPjaEwCX9vU8QAAAABJRU5ErkJggg=="
        />
      </pattern>
    </defs>
    <rect
      id="witch"
      width="45"
      height="58"
      fill="url(#witch)"
    />
  </svg>`,
    content: '',
    audio: './media/mp3/englishtest.mp3',
  },
  {
    id: 10,
    title: 'ჭეშმარიტი მასწავლებელი',
    svg: `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="48"
    height="76"
    viewBox="0 0 48 76"
  >
    <defs>
      <pattern
        id="teacher"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 68 108"
      >
        <image
          width="68"
          height="108"
          xlink:href="data:image/png;base64,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"
        />
      </pattern>
    </defs>
    <rect
      id="teacher"
      width="48"
      height="76"
      fill="url(#teacher)"
    />
  </svg>`,
    content: '',
    audio: './media/mp3/englishtest.mp3',
  },
  {
    id: 11,
    title: 'უკვდავება',
    svg: `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="43"
    height="68"
    viewBox="0 0 43 68"
  >
    <defs>
      <pattern
        id="immortality"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 56 88"
      >
        <image
          width="56"
          height="88"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABYCAYAAACgcjREAAAACXBIWXMAAAsSAAALEgHS3X78AAAFwUlEQVR4nN1c63HbRhBeZ/xfdAVCKghTgeEKzFRguoKwA1MVRKnAVAdwBSErCFVBwAoCVgDPKXuZ1Wr3XtgDaX0zNxZhPO7D3u3r9vBmHEeoiCUALNjte2yz4K3xQxyhFQC0APA+cN4JADoAuK9O1klwYluM47gdx3EYy3CP97Doy4s29QbrCcQo+nEcl9dGcDeBjAT3olbXQnCTSMZ1usMh3JKhuApI3lSSJVrUKZK/A///DQD22I6R+7hzbthxp4Ca3E6pKHgre+XNuyHbZN5rqdxrbSXBnzLfR6Oo/88AsC5Q+U7Cd8pzTJBLcCUccx3cTeiMs4VnK0IcJRKkcPNlO7EPQ2SuTkIuwSX73VXqlxnhXIIcg0EfFsKLuxhB/mDuSJdgw0zFo6V/mkuQP3gtvP0cOKf8Czt/isJ6iUy70ijeyqbABkrezGDteJdcdB9wzXp0zWKGeqtcv7UkV0rQveFjgCQly/3KZeDaozW5sdAXBVQuzkB/ipx3ZopIe9gJ57KFVn6GUjMxoIL5GQD+xA5KuGHOwYNy3rYGuScYDoeVMvRack6rnGM+NH2baugpOsVxpmZkj3ZuNlgSBMWGcWfA1s5FYE0wZR5J/qtdgMtgTbAVjnFPpxeG6R6VljmsCW6EY5K/yiV9CwBfkfzGyMd9ghXBBc6tULKXYq8cd0T/QKI7JcDOQklmu8Hmw5wGO8KTR1Nwg07EJ3QWfAKLv5hjdN4nuGVr9C+1fGaKy5bqi5bcO+j3ahJc4FzgsVoJboVr3BA8kN/Lwuf4udtoqRPJF12iKpc6puEBr+mNonG+KtVGFnR+U9MnglhzhmJJLrQ0ggktFWQN0VWiBM84NFI8E8k+xtDgda4/HwN9CGb1tHDJcg4+Csa+VUj7Yylz0k2LbTR/k6hFdxO0KI/StagjFfucBZrcgNfbPtp+iVzzgdmvLjDkNJzxurjEGCzW6BdkrkgR/jtmjPcJHs+ZGPbjpASzsbbjK0+SkZe04Q6nQmudVbMuQuCQhpN0bBfwTyfBOppIQRUiGmoTlKRVbSVJwiUIDoEsnDlqE9QC19kqnWoT1BZmZpuHl1Ay8JokqOHVENTSga+GoBZyvaohqklxFlNxSYKzSNGaoGT3UghOWecPwoqgL+OSYsMUgqbZbIopBBsSgH4NKJQUgrdo/EtyN0GUZra3icvXXSApxeegk/5fJNjtWdBbhswAMqU221dZxAJXrZRSQo/Pzg6Gc/KSWp2oj9xLamVyMeQSTcnJLHCYSArkYWI0rs25lvwrpRBPmAOKD90EyUl1LXNltH1bKbmcaGVw7MadMBSrlP8nNqmQKEgy9tYojjU3cGQ2Ls1Wuz50Y5rJHmYekimNklSL+FKlt7kycr5Rzd7lEKRzT0reXkvj5Z0vhqrmqlH1Xasu2wI9q397sZQmEeR2Z9ZEbQEoqffctmoEKepUAdqBS/FZQZFEkHv/1y5BYFJ8VluTEi6ZhzAVQKs2bijJFAlWCUQrgCrDLII/ggSBOd7/E5SiiYFpUdv9fPXgRtq/5O6/OtJcgq0QmtwabMCaiyDFkzalBEM1L19q1XMaQpxadIgeEyom7q5AmrTKkTYpMH7nCW6FPUQaHvF8axeOKjNaq+b/bjLr5xw+eIJ9wcUnkvGSdqVxj4gX2JVWGObgsyPo3sw/lR90Kdy9vVITcGC/Y5W+zu79LtxnqFEnc2JJXf71Eb5nd+oe3iag4Y9uiHIDyTvLTQd/e/G66XoIpTT/2xiGka+WrRbTAFfSQlv1Rl/lKKUoOK4t2aTlSCn2PCcT+vjGpaXYYv+6xE+77GiGzdvB2Ac4HnANLzTXmoBGTpmnS+alLDM2mgDqiw13QKirtots8DgL2q7Eu6BaNoeAhAMqmU7TxNq2ghW2mG86Nw7kUy5JqZTY6pK3MesCSU3FgbiBkjuYhJySZj/Hcj4lRudl7Dr/t91nyQDgOyIzRJ4vFTwLAAAAAElFTkSuQmCC"
        />
      </pattern>
    </defs>
    <rect
      id="immortality"
      width="43"
      height="68"
      fill="url(#immortality)"
    />
  </svg>`,
    content: '',
    audio: './media/mp3/englishtest.mp3',
  },
];
for (let i = 0; i < items.length; i++) {
  const cont = document.createElement('a');
  cont.innerHTML = `<div class="grid-item">
    <div class="flex-comp">
      <div class="svg-holder">
        ${items[i].svg}
        <span>${items[i].title}</span>
      </div>
    </div>
  </div>`;

  let sound = new Audio();
  let playbutton = document.querySelector('.play-button-container');
  let background = document.getElementById('loader-container');
  function soundPlayer() {
    sound.src = items[i].audio;
    setTimeout(() => {
      playbutton.onclick = function () {
        sound.addEventListener('timeupdate', function () {
          background.style.transition = '.5s';
          sound.playbackRate = 1;
          background.style.transform = `translateX(${
            -85 + (sound.currentTime / sound.duration) * 85
          }%)`;
        });
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
          sound.play();
        } else {
          sound.pause();
        }
      };
    }, 2000);
  }
  function arrowSwitch() {
    document
      .querySelector('.left-arrow-button')
      .addEventListener('click', function () {
        sound.pause();
        sound.currentTime = 0;
        playbutton.classList.remove('active');
        background.style.transition = `transform 0s ease-in 0s`;
        background.style.transform = 'translateX(-85%)';
        i--;
        if (i >= 0) {
          document.querySelector('.title').innerText = items[i].title;
          soundPlayer();
        } else {
          i = 0;
        }
      });
    document
      .querySelector('.right-arrow-button')
      .addEventListener('click', function () {
        sound.pause();
        sound.currentTime = 0;
        playbutton.classList.remove('active');
        background.style.transition = `transform 0s ease-in 0s`;
        background.style.transform = 'translateX(-85%)';
        i++;
        if (i <= 11) {
          document.querySelector('.title').innerText = items[i].title;
          soundPlayer();
        } else {
          i = 11;
        }
      });
  }

  cont.addEventListener('click', function () {
    switch (items[i].id) {
      case 0: //winasityvaoba
        if (secondaryBackground.classList.contains('active')) {
          removeActive();
        }
      case 1: //shexvedra leviatantan
        document.querySelector('.title').innerText = items[i].title;
        hideElements();
        removeActive();
        shexvedraLeviatantan.classList.add('active');
        secondaryNavBar.classList.add('secondary-nav-bar-active');
        gridItemOpenSlider();
        arrowSwitch();
        soundPlayer();
        break;
      case 2: //shushis qila
        document.querySelector('.title').innerText = items[i].title;
        hideElements();
        removeActive();
        shushisQila.classList.add('active');
        secondaryNavBar.classList.add('secondary-nav-bar-active');
        gridItemOpenSlider();
        arrowSwitch();
        soundPlayer();
        break;
      case 3: //qaosidan kosmosamde
        document.querySelector('.title').innerText = items[i].title;
        hideElements();
        removeActive();
        qaosidanKosmosamde.classList.add('active');
        secondaryNavBar.classList.add('secondary-nav-bar-active');
        gridItemOpenSlider();
        arrowSwitch();
        soundPlayer();
        break;
      case 4: //ofisebis
        document.querySelector('.title').innerText = items[i].title;
        hideElements();
        removeActive();
        opisisAmaoeba.classList.add('active');
        secondaryNavBar.classList.add('secondary-nav-bar-active');
        gridItemOpenSlider();
        arrowSwitch();
        soundPlayer();
        break;
      case 5: //cifruli samotxe
        document.querySelector('.title').innerText = items[i].title;
        hideElements();
        removeActive();
        cifruliSamotxe.classList.add('active');
        secondaryNavBar.classList.add('secondary-nav-bar-active');
        gridItemOpenSlider();
        arrowSwitch();
        soundPlayer();
        break;
      case 6: //yvelaze seqsualuri profesia
        document.querySelector('.title').innerText = items[i].title;
        hideElements();
        removeActive();
        seqsualuriProfesia.classList.add('active');
        secondaryNavBar.classList.add('secondary-nav-bar-active');
        gridItemOpenSlider();
        arrowSwitch();
        soundPlayer();
        break;
      case 7: //xelovnuri inteleqti
        document.querySelector('.title').innerText = items[i].title;
        hideElements();
        removeActive();
        khelovnuriInteleqti.classList.add('active');
        secondaryNavBar.classList.add('secondary-nav-bar-active');
        gridItemOpenSlider();
        arrowSwitch();
        soundPlayer();
        break;
      case 8: //naxatebit saubari
        document.querySelector('.title').innerText = items[i].title;
        hideElements();
        removeActive();
        naxatebitSaubari.classList.add('active');
        secondaryNavBar.classList.add('secondary-nav-bar-active');
        gridItemOpenSlider();
        arrowSwitch();
        soundPlayer();
        break;
      case 9: //jadoqari
        document.querySelector('.title').innerText = items[i].title;
        hideElements();
        removeActive();
        jadoqari.classList.add('active');
        secondaryNavBar.classList.add('secondary-nav-bar-active');
        gridItemOpenSlider();
        arrowSwitch();
        soundPlayer();
        break;
      case 10: //cheshmariti maswavlebeli
        document.querySelector('.title').innerText = items[i].title;
        hideElements();
        removeActive();
        cheshmaritiMaswavlebeli.classList.add('active');
        secondaryNavBar.classList.add('secondary-nav-bar-active');
        gridItemOpenSlider();
        arrowSwitch();
        soundPlayer();
        break;
      case 11: //ukvdaveba
        document.querySelector('.title').innerText = items[i].title;
        hideElements();
        removeActive();
        secondaryBackground.classList.add('active');
        secondaryNavBar.classList.add('secondary-nav-bar-active');
        gridItemOpenSlider();
        arrowSwitch();
        soundPlayer();
        break;
    }
  });
  rowContainer.appendChild(cont);
}

function removeActive() {
  itemsBackgroundImages.forEach((element) => {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
  });
}

function gridItemOpenSlider() {
  secondaryNavBar.classList.add('secondary-nav-bar-active');
  loaderContainer.style.transform = 'translateX(-0%)';
  loaderContainer.style.transition = 'unset';
  setTimeout(() => {
    loaderContainer.style.transform = 'translateX(-85%)';
    loaderContainer.style.transition = 'transform 0.3s ease-in 0.2s';
  }, 2000);
  menuModal.classList.remove('menu-active');
  navigation.classList.add('db');
  modalHeader.classList.remove('df');
  modalHeader.classList.add('dn');
  tableComps.classList.remove('df');
  tableComps.classList.add('dn');
}
