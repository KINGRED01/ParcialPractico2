import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeService } from '../anime.service';
import { Anime } from '../anime';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  animeDetail!: Anime;

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.animeService.getAnime(id).subscribe(anime => {
        this.animeDetail = anime;
      });
    }
  }
// boton para volver
  goBack(): void {
    this.router.navigate(['/']);
  }
}
