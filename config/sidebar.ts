import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/',
    icon: FaTwitter,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/',
    icon: FaLinkedin,
  },
  {
    label: 'StackOverflow',
    href: 'https://stackoverflow.com/users/',
    icon: FaStackOverflow,
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/channel/',
    icon: FaYoutube,
  },
  {
    label: 'Github',
    href: 'https://github.com/',
    icon: FaGithub,
  },
  {
    label: 'Dev.to',
    href: 'https://dev.to/',
    icon: FaDev,
  },
]
