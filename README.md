

```

            <div class="tech-wrapper">
                <h2 class="skill-heading">Rust</h2>
                <p class="tech-p three">Für programmieren auf Systemebene, Reverse Engineering und Hacks- </p>
                <div class="skill-line">
                    <div id="rust" class="percentage"></div>
                </div>
            </div>

```

Notice the `three` class, for three line hight, to aling the progress bars.


# deploy locally
```
docker build -t coverpage .
docker run -p 80:80 coverpage
```
=> goto http://localhost/lang/de

# deploy on server

```
node gen.js
docker build -t nexus.tobias-huebner.org/coverpage:1.8 .
docker push nexus.tobias-huebner.org/coverpage:1.8
```