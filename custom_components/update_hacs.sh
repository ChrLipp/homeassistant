wget -O hacs.zip  `curl -s -L https://github.com/hacs/integration/releases/latest | grep -Eoi 'href="[^\"]+hacs.zip"' | sed 's*href="*https://www.github.com*' | sed 's/"//'`
unzip -o hacs.zip -d hacs
rm hacs.zip
* ha host reboot