package com.dkslgg.record.util;

import com.dkslgg.record.model.dto.MatchDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Arrays;
import java.util.List;

@Component
@Slf4j
public class RiotApiUtil {
    private final WebClient webClient;

    private RiotApiUtil(@Value("${api.riot.secretkey}") String apiKey) {
        webClient = WebClient.builder().baseUrl("https://asia.api.riotgames.com").defaultHeader("X-Riot-Token", apiKey).build();
    }

    //@Transactional(rollbackFor = RecordException.class)
    public List<String> getMatchListByPuuid(String puuid) {
        String[] matchs = webClient.get().uri(uriBuilder -> uriBuilder
                .path("/lol/match/v5/matches/by-puuid/" + puuid + "/ids")
                .queryParam("count", 10)
                .build()).retrieve().bodyToMono(String[].class).block();

        List<String> matchList = Arrays.asList(matchs != null ? matchs : new String[]{});
        log.info("puuid {}에 출력된 Match List: {}", puuid, matchList);

        return matchList;
    }

    //@Transactional(rollbackFor = RecordException.class)
    public MatchDto getMatchInfoByMatchId(String matchId) {
        MatchDto matchDto = webClient.get().uri("/lol/match/v5/matches/{matchId}", matchId).retrieve().bodyToMono(MatchDto.class).block();
        log.info("Match Id {}에 출력된 Match Info: {}", matchId, matchDto);

        return matchDto;
    }
}
