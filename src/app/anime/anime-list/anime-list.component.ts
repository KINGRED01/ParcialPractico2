import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  animes: Array<Anime> = [];
  selectedBAnime?: Anime;
  constructor(private animeService: AnimeService, private router: Router) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }
// pormedio de las rating y total de episodios
  getAverageRating(): number {
    if (!this.animes || this.animes.length === 0) return 0;
    const sum = this.animes.reduce((acc, anime) => acc + Number(anime.Rating), 0);
    return +(sum / this.animes.length).toFixed(2);
  }

  getTotalEpisodes(): number {
    return this.animes.reduce((acc, anime) => acc + (anime.total_episodes || 0), 0);
  }

  onSelect(anime: Anime): void {
    this.selectedBAnime = anime;
  }

  ngOnInit() {
    this.getAnimes();
  }
}
