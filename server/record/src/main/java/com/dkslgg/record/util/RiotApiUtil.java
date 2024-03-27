package com.dkslgg.record.util;

import com.dkslgg.record.model.dto.api.AccountDto;
import com.dkslgg.record.model.dto.api.MatchDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

import java.util.List;

@Component
@Slf4j
public class RiotApiUtil {
    private final RestClient restClient;

    private RiotApiUtil(@Value("${api.riot.secretkey}") String apiKey) {
        restClient = RestClient.builder()
                .baseUrl("https://asia.api.riotgames.com")
                .defaultHeader("X-Riot-Token", apiKey)
                .build();
    }

    public String formatRiotId(String riotId) {
        return (riotId.length() == 2) ? riotId.charAt(0) + " " + riotId.charAt(1) : riotId;
    }

    public AccountDto requestPuuidByRiotId(String gameName, String tagLine) {
        return restClient.get().uri("/riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine}", gameName, tagLine)
                .retrieve()
                .onStatus(HttpStatusCode::is4xxClientError, (request, response) -> {
                    throw new RecordException(ErrorMessage.RIOT_ID_NOT_FOUND);
                }).onStatus(HttpStatusCode::is5xxServerError, (request, response) -> {
                    throw new RecordException(ErrorMessage.RIOT_API_FAILED);
                }).body(AccountDto.class);
    }

    public List<String> requestMatchListByPuuid(String puuid, String startTime) {
        return restClient.get().uri(uriBuilder -> uriBuilder
                        .path("/lol/match/v5/matches/by-puuid/" + puuid + "/ids")
                        .queryParam("startTime", startTime)
                        .queryParam("count", 10)
                        .build()).retrieve()
                .onStatus(HttpStatusCode::is4xxClientError, (request, response) -> {
                    throw new RecordException(ErrorMessage.ACCOUNT_INVALID);
                }).onStatus(HttpStatusCode::is5xxServerError, (request, response) -> {
                    throw new RecordException(ErrorMessage.ACCOUNT_INVALID);
                }).body(new ParameterizedTypeReference<>() {
                });
    }

    public MatchDto requestMatchByMatchId(String matchId) {
        return restClient.get().uri("/lol/match/v5/matches/{matchId}", matchId)
                .retrieve()
                .onStatus(HttpStatusCode::is4xxClientError, (request, response) -> {
                    throw new RecordException(ErrorMessage.MATCH_INVALID);
                }).onStatus(HttpStatusCode::is5xxServerError, (request, response) -> {
                    throw new RecordException(ErrorMessage.MATCH_INVALID);
                }).body(MatchDto.class);

    }
}
